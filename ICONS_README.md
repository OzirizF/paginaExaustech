Instruções para gerar PNG/ICO a partir dos SVGs (localmente)

Requisitos:
- ImageMagick (convert) instalado localmente

Comandos recomendados (Linux/macOS):

# Gera PNGs em várias resoluções a partir do ícone SVG
convert -background none logo-icon.svg -resize 16x16 icon-16.png
convert -background none logo-icon.svg -resize 32x32 icon-32.png
convert -background none logo-icon.svg -resize 48x48 icon-48.png
convert -background none logo-icon.svg -resize 64x64 icon-64.png
convert -background none logo-icon.svg -resize 128x128 icon-128.png
convert -background none logo-icon.svg -resize 256x256 icon-256.png

# Gera um favicon.ico contendo múltiplos tamanhos
convert icon-16.png icon-32.png icon-48.png icon-64.png favicon.ico

# Alternativa (magick)
magick logo-icon.svg -background none -resize 64x64 favicon.png

Observações:
- Se você não tiver ImageMagick, instale com: sudo apt-get install imagemagick (Linux) ou brew install imagemagick (macOS)
- O arquivo `favicon.svg` já foi criado; navegadores modernos suportam SVG como favicon, basta referenciar no HTML:
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">

Se quiser, posso:
- Rodar a instalação e geração aqui (se autorizar instalar pacotes no container).
- Gerar as PNGs/ICO localmente e adicioná-las ao projeto caso você autorize instalar ImageMagick.
