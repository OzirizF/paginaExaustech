# Changelog - Atualização de Design

## 2025-10-17

### ✨ Novas Funcionalidades

#### 🎨 Paleta de Cores Baseada no Logo
- Extraída paleta de cores dominantes do `Logo.jpg`:
  - **Dourado Principal**: `#e3a962` - cor primária do site
  - **Preto**: `#040404` - texto e elementos escuros
  - **Marrom**: `#5e4738` - cor secundária
  - **Cinza Azulado**: `#7c8888` - tons neutros

#### 🌙 Modo Escuro Implementado
- **Toggle de Tema**: Botão no header para alternar entre modo claro e escuro
- **Persistência**: Preferência do usuário salva no localStorage
- **Detecção Automática**: Respeita a preferência do sistema operacional
- **Transições Suaves**: Animações de 0.3s em todas as mudanças de cor
- **Ícones Dinâmicos**: Sol/Lua alternam conforme o tema ativo

#### 🎯 Ícones e Favicons
- Gerados múltiplos tamanhos de favicon a partir do Logo.jpg:
  - `favicon.ico` (16x16, 32x32, 48x48, 64x64)
  - `favicon-32.png` (32x32)
  - `apple-touch-icon.png` (180x180)
- Cache busting com versionamento (`?v=20251017`)
- Meta tags de tema-color para navegadores móveis

### 🎨 Atualizações de Design

#### Modo Claro
- Fundo: `#ffffff` com secundário `#f8f8f8`
- Texto: `#1a1a1a` (principal), `#4a4a4a` (secundário)
- Destaques em dourado (`#e3a962`)
- Sombras suaves com opacidade 0.1

#### Modo Escuro
- Fundo: `#1a1a1a` com secundário `#242424`
- Texto: `#e8e8e8` (principal), `#b8b8b8` (secundário)
- Destaques em dourado (`#e3a962`) mantidos para contraste
- Sombras mais intensas com opacidade 0.3

### 🔄 Componentes Atualizados

Todos os componentes foram adaptados para suportar ambos os temas:

- ✅ Header e navegação
- ✅ Hero section com gradiente dourado
- ✅ Feature cards
- ✅ Seção sobre/about
- ✅ Cards de objetivo
- ✅ Cards de passos/steps
- ✅ Seção de estatísticas
- ✅ Cards de equipe
- ✅ Formulário de contato
- ✅ Cards de topologia
- ✅ Footer
- ✅ Botões flutuantes (CTA e voltar ao topo)

### 📱 Acessibilidade

- Contraste WCAG AA+ em ambos os modos
- Aria-labels nos botões interativos
- Ícones SVG semânticos
- Foco visível em elementos interativos
- Transições respeitam `prefers-reduced-motion`

### 🛠️ Arquivos Modificados

- `exau.html` - Atualizado com nova paleta e modo escuro
- `Logo.jpg` - Usado como fonte de ícones
- `favicon.ico` - Gerado (multi-tamanho válido)
- `favicon-32.png` - Gerado
- `apple-touch-icon.png` - Gerado
- `generate-favicons.js` - Script de geração de ícones
- `palette.json` - Paleta extraída documentada

### 🚀 Como Usar

#### Alternar Tema
Clique no botão circular com ícone de sol/lua no header (canto superior direito).

#### Forçar Atualização de Cache
Se o favicon não aparecer imediatamente:
- **Windows/Linux**: `Ctrl + F5`
- **macOS**: `Cmd + Shift + R`
- Ou abra em aba anônima

#### Personalizar Cores
As variáveis CSS estão definidas em `:root` e `[data-theme="dark"]` no `<style>` do HTML.

### 📊 Benefícios

- **Usabilidade**: Conforto visual em diferentes condições de luz
- **Profissionalismo**: Paleta coerente com identidade da marca
- **Performance**: Transições CSS nativas (sem JavaScript pesado)
- **SEO**: Favicons corretos em todos os dispositivos
- **Manutenção**: Variáveis CSS centralizadas e documentadas
