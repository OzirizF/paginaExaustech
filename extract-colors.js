const getColors = require('get-image-colors');
const fs = require('fs');

getColors('Logo.jpg', 'image/jpeg').then(colors => {
  console.log('Paleta extraída do Logo.jpg:\n');
  colors.forEach((color, i) => {
    const hex = color.hex();
    const rgb = `rgb(${Math.round(color._rgb[0])}, ${Math.round(color._rgb[1])}, ${Math.round(color._rgb[2])})`;
    console.log(`Cor ${i + 1}: ${hex} - ${rgb}`);
  });
  
  // Salvar paleta em JSON para referência
  const palette = colors.map(c => c.hex());
  fs.writeFileSync('palette.json', JSON.stringify({ colors: palette }, null, 2));
  console.log('\nPaleta salva em palette.json');
}).catch(err => {
  console.error('Erro ao extrair cores:', err);
  process.exit(1);
});
