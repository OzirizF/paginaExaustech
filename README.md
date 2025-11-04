# 🔧 Exaustech - Sistema de Monitoramento Inteligente

## 📁 Estrutura do Projeto

A estrutura do projeto foi reorganizada para melhor manutenibilidade e profissionalismo:

```
paginaExaustech-main/
├── index.html              # Página principal (limpa e otimizada)
├── exau.html              # Arquivo original (manter como backup)
├── css/
│   └── styles.css         # Todos os estilos CSS
├── js/
│   └── main.js            # Todo o JavaScript modularizado
├── assets/                # Recursos gerais do projeto
├── images/                # Imagens e recursos visuais
├── PALETA_CORES.md        # Documentação da paleta de cores
└── README.md              # Este arquivo
```

## 🎨 Arquitetura

### HTML (`index.html`)

- **Estrutura semântica** com tags HTML5
- **SEO otimizado** com meta tags apropriadas
- **Acessibilidade** com ARIA labels e atributos apropriados
- **Separação de responsabilidades** - apenas markup, sem CSS ou JS inline

### CSS (`css/styles.css`)

- **Variáveis CSS** para fácil personalização de cores e temas
- **Modo claro e escuro** com sistema de temas
- **Design responsivo** com mobile-first approach
- **Animações suaves** e transições polidas
- **Modular e bem organizado** por seções

### JavaScript (`js/main.js`)

- **Código modular** organizado em gerenciadores (Managers)
- **Padrão de design** limpo e fácil de manter
- **Event-driven** com listeners bem estruturados
- **Performance otimizada** com IntersectionObserver para animações
- **Sem dependências externas** - JavaScript puro (Vanilla JS)

## 🚀 Funcionalidades

### Gerenciadores JavaScript

1. **ThemeManager** - Controle de tema claro/escuro
2. **NavigationManager** - Menu responsivo e smooth scroll
3. **AnimationManager** - Animações on-scroll
4. **VersionToggleManager** - Alternância entre versões comercial e técnica
5. **AccordionManager** - Accordions para mobile
6. **RippleManager** - Efeito ripple em botões
7. **CounterManager** - Animação de contadores
8. **InstallationTabsManager** - Gerenciamento de tabs de instalação
9. **BackToTopManager** - Botão "voltar ao topo"
10. **SVGManager** - Interatividade com SVGs e simulador

## 🎯 Como Usar

### Desenvolvimento Local

1. Abra o arquivo `index.html` em um navegador moderno
2. Para servidor local (recomendado):

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (npx)
   npx serve

   # Live Server (VS Code extension)
   # Clique com botão direito em index.html > Open with Live Server
   ```

### Personalização

#### Alterar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
  --primary-orange: #ff6a00;
  --primary-orange-dark: #e55300;
  --primary-orange-light: #ffb300;
  --primary-yellow: #ffd43b;
  /* ... outras variáveis ... */
}
```

#### Modificar Funcionalidades JavaScript

Cada gerenciador em `js/main.js` é independente e pode ser modificado sem afetar os outros.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop**: > 768px
- **Tablet**: 768px - 900px
- **Mobile**: < 768px

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis e flexbox/grid
- **JavaScript (ES6+)** - Funcionalidades interativas sem frameworks
- **SVG** - Ícones e gráficos vetoriais

## ✅ Melhorias Implementadas

### Organização

- ✅ Separação completa de HTML, CSS e JavaScript
- ✅ Estrutura de pastas profissional
- ✅ Código modular e reutilizável
- ✅ Comentários e documentação

### Performance

- ✅ CSS e JS externos (cache do navegador)
- ✅ Lazy loading para animações
- ✅ IntersectionObserver para elementos visíveis
- ✅ Código otimizado e minificável

### Manutenibilidade

- ✅ Código limpo e bem organizado
- ✅ Padrões de design consistentes
- ✅ Fácil de expandir e modificar
- ✅ Sem dependências externas

## 📝 Próximos Passos

### Sugestões de Melhorias

1. **Build Process**

   - Adicionar minificação de CSS/JS
   - Otimização de imagens
   - Bundling com Webpack/Vite

2. **PWA**

   - Service Worker para cache
   - Manifest.json
   - Funcionalidade offline

3. **Backend Integration**

   - Formulário de contato funcional
   - Sistema de autenticação
   - Dashboard de administração

4. **Testing**
   - Testes unitários (Jest)
   - Testes E2E (Cypress/Playwright)
   - Validação de acessibilidade

## 📞 Contato

Para mais informações sobre o Sistema Exaustech, visite nosso site ou entre em contato através dos canais disponíveis na página.

---

**Versão**: 2.0  
**Data**: Novembro 2025  
**Desenvolvido por**: Equipe Exaustech
