const fs = require('fs');

const bwData = fs.readFileSync('rana_mod2.png');
const colorData = fs.readFileSync('rana3.png');

const bwBase64 = 'data:image/png;base64,' + bwData.toString('base64');
const colorBase64 = 'data:image/png;base64,' + colorData.toString('base64');

const output = `const BASE64_BW = "${bwBase64}";\nconst BASE64_COLOR = "${colorBase64}";\n`;

fs.writeFileSync('textures.js', output);
console.log('textures.js regenerated successfully!');
