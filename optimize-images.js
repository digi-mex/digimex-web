const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const fs = require('fs');
const path = require('path');

(async () => {
    // Convert ICO to WebP
    const icoPath = 'img/digimex.ico';

    if (fs.existsSync(icoPath)) {
        console.log('Converting digimex.ico to WebP format...');

        await imagemin([icoPath], {
            destination: 'img',
            plugins: [
                imageminWebp({ quality: 80 })
            ]
        });

        console.log('✓ Image optimized and saved as digimex.webp');
    } else {
        console.log('digimex.ico not found');
    }
})();
