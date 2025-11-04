# 📋 Guia de Desenvolvimento - Exaustech

## 🎨 Sistema de Cores

Todas as cores do projeto estão definidas como variáveis CSS em `css/styles.css`. Para modificar, edite as variáveis:

### Modo Claro

```css
:root {
  --primary-orange: #ff6a00; /* Cor principal */
  --primary-orange-dark: #e55300; /* Laranja escuro */
  --primary-orange-light: #ffb300; /* Amarelo alaranjado */
  --primary-yellow: #ffd43b; /* Amarelo claro */

  --text-primary: #1a1a1a; /* Texto principal */
  --text-secondary: #4a4a4a; /* Texto secundário */
  --bg-primary: #ffffff; /* Fundo principal */
  --bg-secondary: #f8f8f8; /* Fundo secundário */
}
```

### Modo Escuro

```css
[data-theme="dark"] {
  --text-primary: #e5e5e5;
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  /* ... */
}
```

## 🔧 JavaScript - Estrutura dos Gerenciadores

Cada funcionalidade é gerenciada por um objeto dedicado:

```javascript
const ExampleManager = {
  init() {
    // Código de inicialização
  },

  someMethod() {
    // Métodos auxiliares
  },
};

// Inicializar no DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  ExampleManager.init();
});
```

## 📁 Organização de Arquivos

### Adicionar Nova Imagem

1. Coloque em `images/`
2. Use no HTML: `<img src="images/nome-da-imagem.jpg" alt="Descrição">`

### Adicionar Novo Asset

1. Coloque em `assets/`
2. Referencie conforme necessário

### Modificar Estilos

1. Abra `css/styles.css`
2. Encontre a seção apropriada (indicada por comentários)
3. Modifique ou adicione regras CSS

### Adicionar JavaScript

1. Abra `js/main.js`
2. Crie um novo gerenciador ou modifique existente
3. Adicione ao `DOMContentLoaded` se necessário

## 🚀 Comandos Úteis

### Servidor Local com Python

```bash
# Python 3
cd paginaExaustech-main
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Servidor Local com Node.js

```bash
npx serve
# ou
npx http-server
```

### Live Server (VS Code)

1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## ✅ Checklist de Desenvolvimento

### Antes de Fazer Mudanças

- [ ] Backup do arquivo original
- [ ] Entender qual seção será modificada
- [ ] Verificar se há dependências

### Após Fazer Mudanças

- [ ] Testar em diferentes navegadores
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Verificar no modo claro e escuro
- [ ] Validar HTML (https://validator.w3.org/)
- [ ] Validar CSS (https://jigsaw.w3.org/css-validator/)

## 🎯 Seções do Site

1. **Hero** - Seção inicial com chamada para ação
2. **Sobre** - Descrição da solução
3. **Como Funciona** - Passos do sistema
4. **Benefícios** - Vantagens do produto
5. **Estatísticas** - Indicadores do sistema
6. **Instalação** - Modos de instalação (tabs)
7. **Objetivos** - Objetivos técnicos
8. **Missão/Visão/Valores** - Com toggle comercial/técnico
9. **Cases** - Cases de sucesso
10. **Equipe** - Membros da equipe
11. **Detalhes Técnicos** - Especificações
12. **FAQ** - Perguntas frequentes
13. **Contato** - Formulário de contato

## 🔍 Debugging

### Console do Navegador

Abra as ferramentas de desenvolvimento (F12) para:

- Ver erros JavaScript (Console)
- Inspecionar elementos (Elements)
- Verificar Network requests
- Testar responsividade (Device Mode)

### Problemas Comuns

**JavaScript não funciona:**

- Verifique se `js/main.js` está sendo carregado
- Veja erros no Console (F12)

**CSS não aplica:**

- Verifique se `css/styles.css` está sendo carregado
- Limpe o cache do navegador (Ctrl+Shift+R)

**Imagens não aparecem:**

- Verifique o caminho relativo
- Confirme que o arquivo existe na pasta correta

## 📚 Recursos Úteis

- **HTML**: https://developer.mozilla.org/pt-BR/docs/Web/HTML
- **CSS**: https://developer.mozilla.org/pt-BR/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- **Flexbox**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Grid**: https://css-tricks.com/snippets/css/complete-guide-grid/

## 💡 Dicas

1. **Use as variáveis CSS** ao invés de valores fixos
2. **Siga o padrão** de código existente
3. **Comente código complexo** para facilitar manutenção
4. **Teste sempre** em diferentes dispositivos
5. **Mantenha o backup** do arquivo original (`exau.html`)

---

**Última atualização**: Novembro 2025
