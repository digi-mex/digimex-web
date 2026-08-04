'use strict';
const assert = require('assert');
const {
  parseCSV,
  buildTiendaYAML,
  parseDocPosts,
  parseDate,
  todayLocalISO,
  buildPostMarkdown,
  decodeHTML,
  parseDocHTML,
  isImageUrl,
  googleDriveId,
  toImageUrl,
} = require('../scripts/sync-content');

// --- CSV ---
const csv = 'Nombre,Precio,Imagen,Descripcion,Etiqueta\n' +
  '"Laptop HP i5, 8GB","$4,500","https://example.com/hp.jpg","Seminueva","Seminuevo"\n' +
  '"SSD Kingston 480GB","$850","","Unidad de estado sólido","Nuevo"\n';
const rows = parseCSV(csv);
assert.strictEqual(rows.length, 3, '3 filas');
assert.strictEqual(rows[1][0], 'Laptop HP i5, 8GB', 'respeta comas entre comillas');
assert.strictEqual(rows[1][1], '$4,500');

// --- YAML ---
const yaml = buildTiendaYAML([
  { nombre: 'Laptop HP', precio: '$4,500', imagen: 'https://x.com/h.jpg', descripcion: 'Seminueva', etiqueta: 'Seminuevo' },
]);
assert.ok(yaml.includes('articulos:'), 'tiene articulos:');
assert.ok(yaml.includes('  - nombre: Laptop HP') || yaml.includes('  - nombre: "Laptop HP"'), 'nombre ok');
assert.ok(yaml.includes('precio: "$4,500"'), 'precio con coma escapado');
assert.ok(yaml.includes('imagen: https://x.com/h.jpg'), 'imagen url plana');

// --- Fechas ---
assert.strictEqual(parseDate('2026-03-15'), '2026-03-15');
assert.strictEqual(parseDate('15/03/2026'), '2026-03-15');
assert.strictEqual(parseDate('15 de marzo de 2026'), '2026-03-15');
assert.strictEqual(parseDate('fecha inválida'), null);

// --- Blog ---
const doc = `# Bienvenidos a nuestro blog

Fecha: 15 de marzo de 2026
Categoría: Consejos

Este es el contenido del primer artículo.

---

# Cómo mantener tu laptop

Fecha: 2026-03-20
Categoría: Tecnología

Otro contenido de ejemplo.

- Punto uno
- Punto dos
`;
const posts = parseDocPosts(doc);
assert.strictEqual(posts.length, 2, 'dos entradas');
assert.strictEqual(posts[0].title, 'Bienvenidos a nuestro blog');
assert.strictEqual(posts[0].date, '2026-03-15');
assert.strictEqual(posts[0].category, 'Consejos');
assert.ok(posts[0].content.includes('contenido del primer artículo'));
assert.strictEqual(posts[1].date, '2026-03-20');

const md = buildPostMarkdown(posts[1]);
assert.ok(md.includes('title: "Cómo mantener tu laptop"'));
assert.ok(md.includes('date: 2026-03-20'));
assert.ok(md.includes('categories: Tecnología'));

// --- Post sin fecha: usa fecha de hoy (local) ---
const hoy = todayLocalISO();
const doc2 = '# Solo un título\n\nContenido sin fecha.\n';
assert.strictEqual(parseDocPosts(doc2)[0].date, hoy);
assert.strictEqual(parseDate(''), null, 'fecha vacía -> null');

// --- HTML: entidades y bloques ---
assert.strictEqual(decodeHTML('Gu&iacute;a &amp; m&aacute;s &#250;til'), 'Guía & más útil');
assert.strictEqual(decodeHTML('&#x1F4BB;'), '💻');

const htmlDoc = '<html><body>' +
  '<style>.c1{}</style>' +
  '<h2><span>Primera entrada</span></h2>' +
  '<p>Contenido uno.</p>' +
  '<img src="data:image/png;base64,AAAA" />' +
  '<hr>' +
  '<h2><span>Segunda entrada</span></h2>' +
  '<p>Contenido dos.</p>' +
  '<p><span>---</span></p>' +
  '<h2><span>Tercera entrada</span></h2>' +
  '</body></html>';
const blocks = parseDocHTML(htmlDoc);
assert.strictEqual(blocks.length, 3, 'tres bloques');
assert.strictEqual(blocks[0].images.length, 1, 'primera con imagen');
assert.ok(blocks[0].images[0].startsWith('data:image/png;base64,'), 'data uri');
assert.strictEqual(blocks[1].images.length, 0, 'segunda sin imagen');
assert.strictEqual(blocks[2].images.length, 0, 'tercera sin imagen');

// --- Markdown del post incluye la imagen ---
const mdImg = buildPostMarkdown({ title: 'Con imagen', date: '2026-08-03', category: 'Blog', image: '/assets/img/blog/con-imagen.png' });
assert.ok(mdImg.includes('image: /assets/img/blog/con-imagen.png'), 'incluye image');

// --- Google Drive como imagen ---
assert.strictEqual(googleDriveId('https://drive.google.com/file/d/1-nzbP5Z5E26brYflvXQyhJPfBuR76T2g/view?usp=drive_link'), '1-nzbP5Z5E26brYflvXQyhJPfBuR76T2g');
assert.strictEqual(googleDriveId('https://drive.google.com/uc?id=ABC123'), 'ABC123');
assert.strictEqual(googleDriveId('https://example.com/no-drive.jpg'), '');
assert.ok(isImageUrl('https://drive.google.com/file/d/1-nzbP5Z5E26brYflvXQyhJPfBuR76T2g/view?usp=drive_link'), 'drive file = imagen');
assert.strictEqual(toImageUrl('https://drive.google.com/file/d/ABC123/view'), 'https://lh3.googleusercontent.com/d/ABC123=w1200');
assert.strictEqual(toImageUrl('https://x.com/foto.jpg'), 'https://x.com/foto.jpg');

console.log('OK: todas las pruebas pasaron.');
