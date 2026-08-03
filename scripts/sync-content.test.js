'use strict';
const assert = require('assert');
const {
  parseCSV,
  buildTiendaYAML,
  parseDocPosts,
  parseDate,
  buildPostMarkdown,
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

// --- Post sin fecha: usa fecha de hoy ---
const hoy = new Date().toISOString().slice(0, 10);
const doc2 = '# Solo un título\n\nContenido sin fecha.\n';
assert.strictEqual(parseDocPosts(doc2)[0].date, hoy);

console.log('OK: todas las pruebas pasaron.');
