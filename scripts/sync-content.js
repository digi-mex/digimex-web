#!/usr/bin/env node
/*
 * Sincroniza el contenido del sitio DIGIMEX desde Google Sheets y Google Docs.
 *
 *   - Tienda:   _data/tienda.yml   se genera desde una hoja de cálculo pública.
 *   - Blog:     _posts/*.md        se generan desde un documento público.
 *
 * Para que funcione, los archivos de Google deben estar compartidos como
 * "Cualquier persona con el enlace puede ver". Los IDs van en sync-config.json.
 *
 * Uso:
 *   node scripts/sync-content.js            # descarga y genera todo
 *   node scripts/sync-content.js --tienda   # solo la tienda
 *   node scripts/sync-content.js --blog     # solo el blog
 *
 * Sin dependencias externas (solo Node estándar) para poder correrlo en
 * GitHub Actions sin instalar nada.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const CONFIG = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'sync-config.json'), 'utf8')
);

const EXIT_OK = 0;
const EXIT_ERROR = 1;

// ---------------------------------------------------------------------------
// Utilidades de red
// ---------------------------------------------------------------------------

function fetchText(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https:') ? https : require('http');
    lib
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
          res.resume();
          fetchText(res.headers.location, redirects + 1).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`HTTP ${res.statusCode} para ${url}`));
          return;
        }
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

// ---------------------------------------------------------------------------
// CSV (sin dependencias)
// ---------------------------------------------------------------------------

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  row.push(field);
  if (row.length > 1 || row[0] !== '') rows.push(row);
  return rows;
}

function normalizeHeader(h) {
  return String(h || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

const COLUMN_MAP = {
  nombre: 'nombre',
  name: 'nombre',
  titulo: 'nombre',
  title: 'nombre',
  articulo: 'nombre',
  producto: 'nombre',
  item: 'nombre',
  precio: 'precio',
  price: 'precio',
  costo: 'precio',
  cost: 'precio',
  imagen: 'imagen',
  image: 'imagen',
  foto: 'imagen',
  photo: 'imagen',
  img: 'imagen',
  url_imagen: 'imagen',
  enlace_imagen: 'imagen',
  link_imagen: 'imagen',
  imagen_enlace: 'imagen',
  enlace_de_imagen: 'imagen',
  enlace_de_la_imagen: 'imagen',
  foto_url: 'imagen',
  url_foto: 'imagen',
  image_link: 'imagen',
  imagen_principal: 'imagen',
  imagen1: 'imagen',
  imagen_1: 'imagen',
  foto1: 'imagen',
  foto_1: 'imagen',
  enlace: 'enlace',
  link: 'enlace',
  url: 'enlace',
  url_producto: 'enlace',
  enlace_producto: 'enlace',
  url_publicacion: 'enlace',
  enlace_publicacion: 'enlace',
  link_producto: 'enlace',
  descripcion: 'descripcion',
  description: 'descripcion',
  detalles: 'descripcion',
  descripcion_completa: 'descripcion',
  etiqueta: 'etiqueta',
  tag: 'etiqueta',
  etiquetas: 'etiqueta',
  etiqueta1: 'etiqueta',
  categoria: 'etiqueta',
  condicion: 'condicion',
  condition: 'condicion',
  estado: 'condicion',
  marca: 'marca',
  brand: 'marca',
  modelo: 'modelo',
  model: 'modelo',
};

// ¿La celda contiene una URL truncada (Google a veces corta las largas con "…")?
function isTruncated(u) {
  return /…|\.\.\./.test(String(u));
}

// Extrae el ID de un archivo compartido de Google Drive:
//   drive.google.com/file/d/<ID>/view
//   drive.google.com/uc?id=<ID>
//   drive.google.com/open?id=<ID>
function googleDriveId(u) {
  const s = String(u);
  let m = /\/file\/d\/([a-zA-Z0-9_-]+)/.exec(s);
  if (m) return m[1];
  m = /[?&]id=([a-zA-Z0-9_-]+)/.exec(s);
  if (m) return m[1];
  return '';
}

// Convierte un enlace de Google Drive a una URL directa que el navegador
// puede cargar dentro de <img> (requiere que el archivo esté compartido
// como "Cualquier persona con el enlace puede ver").
function toImageUrl(u) {
  const id = googleDriveId(u);
  if (id) return `https://lh3.googleusercontent.com/d/${id}=w1200`;
  return String(u || '').trim();
}

// ¿El valor parece una URL de imagen (no una página)?
function isImageUrl(u) {
  const s = String(u);
  if (!/^https?:\/\//i.test(s)) return false;
  if (isTruncated(s)) return false;
  if (googleDriveId(s)) return true;
  if (/\.(jpe?g|png|webp|gif|avif|bmp|heic|svg)(\?|#|$)/i.test(s)) return true;
  if (/fbcdn\./i.test(s) || /scontent\./i.test(s) || /\.fna\./i.test(s)) return true;
  if (/lookaside\.fbsbx\./i.test(s)) return true;
  if (/lh\d+\.googleusercontent\.com\//i.test(s)) return true;
  if (/drive\.google\.com\/.*\/uc\?|drive\.google\.com\/.*\/thumbnail|drive\.google\.com\/.*preview/i.test(s)) return true;
  if (/images\.(pexels|pixabay)\.(com|net)\//i.test(s)) return true;
  if (/raw\.githubusercontent\.com\//i.test(s)) return true;
  if (/\.(imgur|cloudinary|unsplash|imageshack)\./i.test(s)) return true;
  if (/\/photos?\//i.test(s) && /(\?|&).*fbid=/i.test(s)) return false; // página de foto de FB, no archivo
  return false;
}

// Descripción corta para la tarjeta: primera línea útil, sin emojis iniciales.
function firstParagraph(text) {
  const firstLine = String(text).trim().split('\n').find((l) => l.trim() !== '');
  return String(firstLine || '')
    .replace(/^[\s\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE0F}\u{2700}-\u{27BF}]+/u, '')
    .trim();
}

// Limpia la descripción del feed de marketplace: quita etiquetas SEO,
// separadores, líneas de navegación y ruido que no aporta al comprador.
function cleanDetails(text) {
  const lines = String(text || '').replace(/\r\n/g, '\n').split('\n');
  const clean = lines.map((l) => l.trim());
  const drop = new Set();

  // Bloque de palabras clave al final (líneas solo de texto separadas por comas).
  let keywordRun = false;
  clean.forEach((l, i) => {
    const wordOnly = /^[\p{L}\p{N} ,]+$/u.test(l);
    const commas = (l.match(/,/g) || []).length;
    const isKw = wordOnly && (commas >= 2 || keywordRun);
    if (isKw) {
      drop.add(i);
      keywordRun = true;
    } else {
      keywordRun = false;
    }
  });

  const kept = [];
  for (let i = 0; i < clean.length; i++) {
    const l = clean[i];
    if (drop.has(i)) continue;
    if (!l) {
      if (kept.length && kept[kept.length - 1] !== '') kept.push('');
      continue;
    }
    if (/^🔎/.test(l)) continue; // dump de palabras clave
    if (/^#+/.test(l)) continue; // hashtags
    if (/búsquedas relacionadas/i.test(l)) continue;
    if (/ubicación es aproximada/i.test(l)) continue;
    if (/^disponible (en|por) mercado libre$/i.test(l)) continue;
    if (/^(apoyo|soporte|atrás|ayuda|volver a comprar|reportar venta)$/i.test(l)) continue;
    if (/^[\s━─═\-=_/\\*•·~]+$/.test(l) && l.length >= 3) continue; // líneas separadoras
    kept.push(l);
  }
  while (kept.length && kept[0] === '') kept.shift();
  while (kept.length && kept[kept.length - 1] === '') kept.pop();
  return kept.join('\n');
}

// ---------------------------------------------------------------------------
// YAML simple (solo lo que necesitamos: listas de mapas con strings)
// ---------------------------------------------------------------------------

function yamlString(value) {
  if (value === null || value === undefined) return 'null';
  let str = String(value).replace(/\r\n/g, '\n').trim();
  if (
    str === '' ||
    /^[!&*?|>%@`#],/.test(str) ||
    /^[\s]*[:#-]/.test(str) ||
    /^[-]/.test(str) &&
    /^[-]?\d/.test(str) ||
    /[:]\s/.test(str) ||
    /[:]\s*$/.test(str) ||
    /[{}[\],&*#?|<>=!%@`"']/.test(str) ||
    /^\s|\s$/.test(str)
  ) {
    return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  }
  return str;
}

function buildTiendaYAML(articulos) {
  const lines = [];
  lines.push('# ARCHIVO GENERADO AUTOMÁTICAMENTE por scripts/sync-content.js.');
  lines.push('# NO lo edites a mano: se sobrescribe con el contenido de la hoja');
  lines.push('# de cálculo. Edita la hoja y vuelve a ejecutar el script.');
  lines.push('#');
  lines.push('# Campos de cada artículo: nombre, precio, imagen, enlace, descripcion, detalles, etiqueta, marca, modelo, condicion.');
  lines.push('articulos:');
  for (const a of articulos) {
    lines.push(`  - nombre: ${yamlString(a.nombre)}`);
    lines.push(`    precio: ${yamlString(a.precio)}`);
    lines.push(`    imagen: ${yamlString(a.imagen)}`);
    lines.push(`    enlace: ${yamlString(a.enlace)}`);
    lines.push(`    descripcion: ${yamlString(a.descripcion)}`);
    lines.push(`    etiqueta: ${yamlString(a.etiqueta)}`);
    lines.push(`    marca: ${yamlString(a.marca)}`);
    lines.push(`    modelo: ${yamlString(a.modelo)}`);
    lines.push(`    condicion: ${yamlString(a.condicion)}`);
    if (a.detalles) lines.push(`    detalles: ${yamlBlock(a.detalles)}`);
  }
  return lines.join('\n') + '\n';
}

// Bloque literal YAML (preserva saltos de línea) con el sangrado del nivel.
function yamlBlock(value) {
  const str = String(value).replace(/\r\n/g, '\n').replace(/\n+$/, '');
  const indent = '      ';
  return '|-\n' + str.split('\n').map((l) => (l ? indent + l : '')).join('\n');
}

// ---------------------------------------------------------------------------
// Tienda: hoja de cálculo -> _data/tienda.yml
// ---------------------------------------------------------------------------

async function syncTienda() {
  const url = `https://docs.google.com/spreadsheets/d/${CONFIG.spreadsheetId}/export?format=csv`;
  const csv = await fetchText(url);
  const rows = parseCSV(csv);
  if (rows.length === 0) {
    console.warn('  [tienda] La hoja está vacía.');
    return;
  }

  const headers = rows[0].map(normalizeHeader);
  const mapped = headers.map((h) => COLUMN_MAP[h] || null);

  const articulos = [];
  for (let r = 1; r < rows.length; r++) {
    const raw = rows[r];
    const articulo = { nombre: '', precio: '', imagen: '', enlace: '', descripcion: '', detalles: '', etiqueta: '', marca: '', modelo: '', condicion: '' };
    let hasContent = false;
    headers.forEach((h, i) => {
      const key = mapped[i];
      if (!key) return;
      const value = (raw[i] || '').trim();
      if (value) hasContent = true;
      if (key === 'nombre') articulo.nombre = value;
      if (key === 'precio') articulo.precio = value;
      if (key === 'imagen') {
        if (isImageUrl(value)) {
          articulo.imagen = toImageUrl(value);
        } else if (isTruncated(value)) {
          console.warn(`    [tienda] ⚠️ "${articulo.nombre || 'artículo sin nombre'}": la URL de imagen está truncada (…). Reemplázala en la hoja por una foto real.`);
        } else if (/^https?:\/\//i.test(value)) {
          if (!articulo.enlace) articulo.enlace = value;
          console.warn(`    [tienda] ⚠️ "${articulo.nombre || 'artículo sin nombre'}": la celda de imagen contiene un enlace de página (no una foto). Se usó como enlace de publicación.`);
        }
      }
      if (key === 'enlace' && /^https?:\/\//i.test(value)) {
        if (isImageUrl(value)) {
          if (!articulo.imagen) articulo.imagen = toImageUrl(value);
        } else if (!isTruncated(value) && !articulo.enlace) {
          articulo.enlace = value;
        }
      }
      if (key === 'descripcion') {
        articulo.detalles = cleanDetails(value);
        articulo.descripcion = firstParagraph(articulo.detalles);
      }
      if (key === 'etiqueta') articulo.etiqueta = value;
      if (key === 'marca') articulo.marca = value;
      if (key === 'modelo') articulo.modelo = value;
      if (key === 'condicion') articulo.condicion = value;
    });
    if (hasContent && articulo.nombre) articulos.push(articulo);
  }

  const outPath = path.join(ROOT, CONFIG.tiendaFile);

  // Preservar enlaces de la versión anterior si la hoja no trae nuevos
  const existingEnlaces = {};
  if (fs.existsSync(outPath)) {
    let currentNombre = '';
    fs.readFileSync(outPath, 'utf8').split('\n').forEach((line) => {
      const nm = line.match(/^\s*-?\s*nombre:\s*(.+)/);
      if (nm) currentNombre = nm[1].trim();
      const el = line.match(/^\s*enlace:\s*"?([^"\n]+)"?\s*$/);
      if (el && el[1] && el[1] !== '') existingEnlaces[currentNombre] = el[1];
    });
  }
  articulos.forEach((a) => {
    if (!a.enlace && existingEnlaces[a.nombre]) {
      a.enlace = existingEnlaces[a.nombre];
    }
  });

  fs.writeFileSync(outPath, buildTiendaYAML(articulos), 'utf8');
  console.log(`  [tienda] ${articulos.length} artículos -> ${CONFIG.tiendaFile}`);
}

// ---------------------------------------------------------------------------
// Blog: documento -> _posts/*.md
// ---------------------------------------------------------------------------

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function parseDocPosts(text) {
  const normalized = text.replace(/\r\n/g, '\n');
  const blocks = normalized
    .split(/\n\s*\n?[-*=_]{3,}\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  const posts = blocks.map((block) => {
    const lines = block.split('\n');
    const titleLine = lines.find((l) => /^\s*#{1,2}\s+/.test(l));
    const titleFromHeading = !!titleLine;
    let title = titleLine ? titleLine.replace(/^\s*#{1,2}\s+/, '').trim() : '';
    let date = '';
    let category = '';
    let autor = '';

    const meta = ['Fecha:', 'Date:', 'Fecha :', 'Date :'];
    const catMeta = ['Categoría:', 'Categoria:', 'Category:', 'Categoría :', 'Categoria :'];
    const autorMeta = ['Autor:', 'Author:', 'Autor :', 'Author :'];

    const metaIdx = lines.findIndex((l) => meta.some((m) => l.trim().toLowerCase().startsWith(m.toLowerCase())));
    const catIdx = lines.findIndex((l) => catMeta.some((m) => l.trim().toLowerCase().startsWith(m.toLowerCase())));
    const autorIdx = lines.findIndex((l) => autorMeta.some((m) => l.trim().toLowerCase().startsWith(m.toLowerCase())));

    if (metaIdx >= 0) date = lines[metaIdx].replace(/^[^:]*:\s*/, '').trim();
    if (catIdx >= 0) category = lines[catIdx].replace(/^[^:]*:\s*/, '').trim();
    if (autorIdx >= 0) autor = lines[autorIdx].replace(/^[^:]*:\s*/, '').trim();

    if (!title && lines[0]) title = lines[0].trim();

    // Quita del cuerpo: metadatos, la línea del título (heading o primera línea)
    // y los marcadores "Título:" por si el documento los incluye.
    const removeIdx = new Set([metaIdx, catIdx, autorIdx].filter((i) => i >= 0));
    if (titleFromHeading) {
      const idx = lines.indexOf(titleLine);
      if (idx >= 0) removeIdx.add(idx);
    } else {
      removeIdx.add(0);
    }
    lines.forEach((l, i) => {
      if (/^\s*Título\s*:\s*/i.test(l)) removeIdx.add(i);
    });
    const contentLines = lines.filter((_, i) => !removeIdx.has(i));
    let content = contentLines.join('\n').trim();

    // La fecha en el documento (si viene en español) se normaliza a YYYY-MM-DD.
    const parsedDate = parseDate(date);
    if (!parsedDate) date = todayLocalISO();

    return {
      title: title || 'Sin título',
      date: parsedDate || todayLocalISO(),
      category: category || 'Blog',
      autor,
      content,
    };
  });

  return posts;
}

// Fecha local en formato YYYY-MM-DD (sin desfase por zona horaria).
function todayLocalISO() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function parseDate(str) {
  if (!str) return null;
  const s = String(str).trim();
  let m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (m) return `${m[1]}-${String(m[2]).padStart(2, '0')}-${String(m[3]).padStart(2, '0')}`;
  m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/);
  if (m) return `${m[3]}-${String(m[2]).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}`;
  m = s.match(/(\d{1,2}) de (\w+)[\s]*de[\s]*(\d{4})/);
  if (m) {
    const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const idx = months.findIndex((mo) => mo.startsWith(m[2].toLowerCase()));
    if (idx >= 0) return `${m[3]}-${String(idx + 1).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}`;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Blog: imágenes embebidas en el documento (export HTML)
// ---------------------------------------------------------------------------

const HTML_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú',
  Aacute: 'Á', Eacute: 'É', Iacute: 'Í', Oacute: 'Ó', Uacute: 'Ú',
  ntilde: 'ñ', Ntilde: 'Ñ', uuml: 'ü', Uuml: 'Ü', auml: 'ä', Auml: 'Ä',
  ouml: 'ö', Ouml: 'Ö', euml: 'ë', Euml: 'Ë', iuml: 'ï', Iuml: 'Ï',
  agrave: 'à', Agrave: 'À', egrave: 'è', Egrave: 'È', igrave: 'ì',
  Igrave: 'Ì', ograve: 'ò', Ograve: 'Ò', ugrave: 'ù', Ugrave: 'Ù',
  ccedil: 'ç', Ccedil: 'Ç', middot: '·', bull: '•', hellip: '…',
  ndash: '–', mdash: '—', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”',
  reg: '®', copy: '©', trade: '™', deg: '°', plusmn: '±', times: '×',
  divide: '÷', micro: 'µ', frac12: '½', frac14: '¼', frac34: '¾',
};

function decodeHTML(text) {
  return String(text)
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => (HTML_ENTITIES[n] !== undefined ? HTML_ENTITIES[n] : m));
}

// Divide el HTML del documento en bloques (una entrada por bloque) y extrae
// las imágenes de cada uno. El separador entre entradas es una línea de
// guiones o una regla horizontal.
function parseDocHTML(html) {
  const body = String(html).slice(html.indexOf('<body'), html.lastIndexOf('</body>') + 7);
  const cleaned = body.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  const marked = cleaned
    .replace(/<hr[^>]*>/gi, '\n[[SEP]]\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (m, inner) => {
      const text = inner.replace(/<[^>]+>/g, '').trim();
      return /^-{3,}$/.test(text) ? '\n[[SEP]]\n' : m;
    });
  return marked
    .split('[[SEP]]')
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const images = [];
      const re = /<img[^>]*src="([^"]+)"/gi;
      let m;
      while ((m = re.exec(block))) images.push(decodeHTML(m[1]));
      return { images };
    });
}

// Guarda la primera imagen de una entrada (data URI o URL) y devuelve la ruta
// relativa del sitio para usarla en el front matter `image`.
function saveBlogImage(slug, src) {
  const m = /^data:image\/([a-z0-9]+);base64,([\s\S]+)$/i.exec(src);
  if (m) {
    let ext = m[1].toLowerCase();
    if (ext === 'jpeg') ext = 'jpg';
    const dir = path.join(ROOT, 'assets', 'img', 'blog');
    fs.mkdirSync(dir, { recursive: true });
    const fname = `${slug}.${ext}`;
    fs.writeFileSync(path.join(dir, fname), Buffer.from(m[2].replace(/\s+/g, ''), 'base64'));
    return `/assets/img/blog/${fname}`;
  }
  if (/^https?:\/\//i.test(src)) return src;
  return '';
}

function buildPostMarkdown(post) {
  const fm = [
    '---',
    'layout: post',
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `date: ${post.date}`,
    `categories: ${post.category}`,
    post.autor ? `autor: "${post.autor.replace(/"/g, '\\"')}"` : null,
    post.image ? `image: ${yamlString(post.image)}` : null,
    '---',
    '',
    post.content,
    '',
  ]
    .filter((l) => l !== null)
    .join('\n');
  return fm;
}

async function syncBlog() {
  const url = `https://docs.google.com/document/d/${CONFIG.blogDocId}/export?format=txt`;
  const htmlUrl = `https://docs.google.com/document/d/${CONFIG.blogDocId}/export?format=html`;
  const [txt, html] = await Promise.all([fetchText(url), fetchText(htmlUrl)]);
  const posts = parseDocPosts(txt);
  if (posts.length === 0) {
    console.warn('  [blog] No se encontraron entradas en el documento.');
    return;
  }

  // Asocia a cada entrada la primera imagen de su bloque en el HTML (por orden).
  const blocks = parseDocHTML(html);
  for (let i = 0; i < posts.length; i++) {
    const block = blocks[i];
    if (block && block.images.length) {
      posts[i].image = saveBlogImage(slugify(posts[i].title), block.images[0]);
    }
  }

  const postsDir = path.join(ROOT, CONFIG.postsDir);
  fs.mkdirSync(postsDir, { recursive: true });

  let written = 0;
  for (const post of posts) {
    const slug = slugify(post.title);
    if (!slug) continue;
    const fname = `${post.date}-${slug}.md`;
    fs.writeFileSync(path.join(postsDir, fname), buildPostMarkdown(post), 'utf8');
    written++;
    console.log(`  [blog] ${fname}${post.image ? ` (imagen: ${post.image})` : ''}`);
  }

  // Elimina posts generados que ya no existan en el documento (prefijo generado).
  const generated = new Set(posts.map((p) => `${p.date}-${slugify(p.title)}.md`));
  for (const f of fs.readdirSync(postsDir)) {
    if (/^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f) && !generated.has(f)) {
      fs.unlinkSync(path.join(postsDir, f));
      console.log(`  [blog] elimina ${f}`);
    }
  }

  // Elimina imágenes de blog huérfanas (cuya entrada ya no existe).
  const imageDir = path.join(ROOT, 'assets', 'img', 'blog');
  if (fs.existsSync(imageDir)) {
    const slugs = new Set(posts.map((p) => slugify(p.title)));
    for (const f of fs.readdirSync(imageDir)) {
      if (!slugs.has(f.replace(/\.(png|jpe?g|gif|webp|avif)$/i, ''))) {
        fs.unlinkSync(path.join(imageDir, f));
        console.log(`  [blog] elimina imagen ${f}`);
      }
    }
  }
  console.log(`  [blog] ${written} entradas -> ${CONFIG.postsDir}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const onlyTienda = args.includes('--tienda');
  const onlyBlog = args.includes('--blog');

  console.log('Sincronizando contenido DIGIMEX...');

  let failed = false;
  if (!onlyBlog) {
    try {
      console.log('- Tienda (hoja de cálculo):');
      await syncTienda();
    } catch (err) {
      failed = true;
      console.error(`  [tienda] ERROR: ${err.message}`);
    }
  }
  if (!onlyTienda) {
    try {
      console.log('- Blog (documento):');
      await syncBlog();
    } catch (err) {
      failed = true;
      console.error(`  [blog] ERROR: ${err.message}`);
    }
  }

  if (failed) {
    console.warn('\nTerminó con errores. Los datos existentes se conservan tal cual.');
    process.exit(EXIT_ERROR);
  }
  process.exit(EXIT_OK);
}

module.exports = {
  parseCSV,
  normalizeHeader,
  COLUMN_MAP,
  yamlString,
  yamlBlock,
  buildTiendaYAML,
  isImageUrl,
  isTruncated,
  googleDriveId,
  toImageUrl,
  firstParagraph,
  cleanDetails,
  slugify,
  parseDocPosts,
  parseDate,
  todayLocalISO,
  buildPostMarkdown,
  decodeHTML,
  parseDocHTML,
  saveBlogImage,
  syncTienda,
  syncBlog,
};

if (require.main === module) {
  main();
}
