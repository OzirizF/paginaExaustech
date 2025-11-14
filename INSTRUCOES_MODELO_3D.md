# Instruções para Visualização 3D do Modelo SketchUp

## ⚠️ IMPORTANTE: Conversão Necessária

Arquivos `.skp` (SketchUp) não podem ser visualizados diretamente em navegadores web. Você precisa converter o arquivo para formato `.glb` ou `.gltf` primeiro.

## 📋 Opções de Conversão

### Opção 1: Usando SketchUp (Recomendado)

1. Abra o arquivo `projeto3d.skp` no SketchUp
2. Vá em **Arquivo > Exportar > Modelo 3D**
3. Escolha o formato **glTF (.glb)** ou **glTF (.gltf)**
4. Salve como `projeto3d.glb`
5. Coloque o arquivo na pasta `/models/`

### Opção 2: SketchUp Free (Online)

1. Acesse https://app.sketchup.com/
2. Faça upload do arquivo `projeto3d.skp`
3. Vá em **Arquivo > Exportar > Modelo 3D**
4. Escolha formato **glTF Binary (.glb)**
5. Baixe e coloque na pasta `/models/`

### Opção 3: Conversor Online

Use ferramentas gratuitas de conversão:

- **Aspose**: https://products.aspose.app/3d/conversion/skp-to-glb
- **AnyConv**: https://anyconv.com/pt/conversor-de-skp-para-glb/
- **Convertio**: https://convertio.co/pt/skp-glb/

Passos:

1. Faça upload de `images/projeto3d.skp`
2. Escolha formato de saída: **GLB**
3. Converta e baixe
4. Salve como `projeto3d.glb` na pasta `/models/`

### Opção 4: Blender (Gratuito)

1. Baixe e instale o Blender: https://www.blender.org/
2. Instale o addon "SketchUp Importer" (se necessário)
3. Importe o arquivo `.skp`
4. Exporte como `.glb`: **Arquivo > Exportar > glTF 2.0 (.glb/.gltf)**
5. Salve na pasta `/models/`

## 🔧 Após a Conversão

1. Coloque o arquivo convertido em `/models/projeto3d.glb`

2. Atualize o caminho no arquivo `/js/main.js` (linha ~514):

   ```javascript
   const modelPath = "models/projeto3d.glb"; // Atualizado!
   ```

3. Recarregue a página para ver o modelo 3D interativo

## ✨ Recursos do Visualizador 3D

O visualizador oferece:

- **Rotação automática** do modelo
- **Controles de mouse**:
  - Arrastar: Girar o modelo
  - Roda do mouse: Zoom
  - Botão direito + arrastar: Mover câmera
- **Iluminação realista** com sombras
- **Grid de referência** para escala
- **Responsivo** e adaptável a diferentes tamanhos de tela

## 🎨 Personalização

### Alterar cor de fundo

Edite `/js/model-viewer.js` linha ~30:

```javascript
this.scene.background = new THREE.Color(0xf5f5f5); // Altere a cor aqui
```

### Desabilitar rotação automática

Edite `/js/model-viewer.js` linha ~55:

```javascript
this.controls.autoRotate = false; // Altere para false
```

### Ajustar velocidade de rotação

Edite `/js/model-viewer.js` linha ~56:

```javascript
this.controls.autoRotateSpeed = 2; // Altere o valor (padrão: 2)
```

## 🐛 Solução de Problemas

### Modelo não aparece

- Verifique se o arquivo `.glb` está na pasta correta
- Abra o Console do navegador (F12) para ver erros
- Verifique se o caminho no `main.js` está correto

### Modelo muito grande ou pequeno

O visualizador ajusta automaticamente a escala, mas você pode modificar manualmente em `/js/model-viewer.js` linha ~94.

### Erros de carregamento

- Certifique-se de que as bibliotecas Three.js foram carregadas
- Verifique sua conexão com a internet (bibliotecas são CDN)
- Tente usar outro formato (.gltf ao invés de .glb)

## 📚 Documentação Adicional

- **Three.js**: https://threejs.org/docs/
- **glTF Format**: https://www.khronos.org/gltf/
- **SketchUp Help**: https://help.sketchup.com/

## 🔄 Status Atual

✅ Visualizador 3D implementado  
✅ Interface HTML atualizada  
✅ Estilos CSS adicionados  
⏳ **Aguardando conversão do arquivo .skp para .glb**

Após converter o arquivo, o modelo 3D será exibido automaticamente no lugar da imagem do Unsplash na seção "Sobre".
