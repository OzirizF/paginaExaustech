const sharp = require('sharp');
const pngToIcoModule = require('png-to-ico');
const pngToIco = pngToIcoModule && pngToIcoModule.default ? pngToIcoModule.default : pngToIcoModule;
const fs = require('fs').promises;

(async () => {
  try {
    const src = 'Logo.jpg';
  const sizes = [16, 32, 48, 64];
    // gerar PNGs
    await Promise.all([
      ...sizes.map(sz => sharp(src).resize(sz, sz, { fit: 'cover' }).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(`favicon-${sz}.png`)),
      sharp(src).resize(180, 180, { fit: 'cover' }).png({ compressionLevel: 9 }).toFile('apple-touch-icon.png')
    ]);

    // gerar ICO a partir dos PNGs
  const buffers = await Promise.all(sizes.map(sz => fs.readFile(`favicon-${sz}.png`)));
  const ico = await pngToIco(buffers);
    await fs.writeFile('favicon.ico', ico);
    console.log('Favicons gerados com sucesso: favicon.ico, favicon-16.png, favicon-32.png, favicon-48.png, favicon-64.png, apple-touch-icon.png');
  } catch (err) {
    console.error('Erro ao gerar favicons:', err);
    process.exit(1);
  }
})();
