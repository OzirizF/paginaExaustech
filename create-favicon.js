const sharp = require('sharp');

sharp('Logo.jpg')
  .resize(32, 32)
  .toFile('favicon.ico', (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('favicon.ico created successfully');
    }
  });
