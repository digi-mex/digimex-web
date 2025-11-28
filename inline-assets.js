const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'assets', 'css');
const includesDir = path.join(__dirname, '_includes');

// Ensure _includes/css exists
const includesCssDir = path.join(includesDir, 'css');
if (!fs.existsSync(includesCssDir)) {
    fs.mkdirSync(includesCssDir, { recursive: true });
}

// Function to copy and inline
function copyForInlining(filename) {
    const srcPath = path.join(cssDir, filename);
    const destPath = path.join(includesCssDir, filename);

    if (fs.existsSync(srcPath)) {
        const content = fs.readFileSync(srcPath, 'utf8');
        fs.writeFileSync(destPath, content);
        console.log(`Copied ${filename} to _includes/css/ for inlining`);
    } else {
        console.warn(`Warning: ${filename} not found in assets/css/`);
    }
}

copyForInlining('main.css');
copyForInlining('style.css');
