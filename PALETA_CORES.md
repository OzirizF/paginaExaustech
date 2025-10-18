# 🎨 Paleta de Cores Exaustech

## Versão 2.0 - Atualizada em 18/10/2025

### Paleta Principal – Baseada no Logo Oficial

Esta paleta representa as cores vibrantes e energéticas do gradiente laranja-amarelo do logo Exaustech, transmitindo inovação, energia e segurança.

---

## 🔥 Cores Primárias

### **Fundo Principal**
- **Nome**: Preto
- **HEX**: `#000000`
- **RGB**: `rgb(0, 0, 0)`
- **Uso**: Fundo principal no modo escuro, elementos de contraste forte

### **Gradiente Laranja-Amarelo**

#### 1. Laranja Escuro (Base)
- **HEX**: `#E55300`
- **RGB**: `rgb(229, 83, 0)`
- **Uso**: Base do gradiente, sombras, estados hover invertidos

#### 2. Laranja Médio ⭐ (Principal)
- **HEX**: `#FF6A00`
- **RGB**: `rgb(255, 106, 0)`
- **Uso**: Cor primária do site, botões, links, destaques principais
- **Característica**: Tom vibrante e energético, cor central da identidade

#### 3. Amarelo Alaranjado
- **HEX**: `#FFB300`
- **RGB**: `rgb(255, 179, 0)`
- **Uso**: Transição do gradiente, elementos secundários

#### 4. Amarelo Claro (Topo)
- **HEX**: `#FFD43B`
- **RGB**: `rgb(255, 212, 59)`
- **Uso**: Topo do gradiente, highlights, elementos de brilho

---

## 📝 Cores de Marca (Texto do Logo)

### **Texto "Exaus"**
- **Nome**: Laranja Avermelhado
- **HEX**: `#E74C1B`
- **RGB**: `rgb(231, 76, 27)`
- **Uso**: Elementos especiais que referenciam o nome "Exaus"

### **Texto "tech"**
- **Nome**: Cinza Claro
- **HEX**: `#E5E5E5`
- **RGB**: `rgb(229, 229, 229)`
- **Uso**: Texto secundário no modo escuro, elementos sutis

### **Detalhe/Risco**
- **Nome**: Branco
- **HEX**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **Uso**: Texto sobre fundos escuros, ícones, detalhes de contraste

---

## 🎨 Gradientes

### Gradiente Principal
```css
background: linear-gradient(135deg, #E55300 0%, #FF6A00 35%, #FFB300 70%, #FFD43B 100%);
```
**Uso**: Hero sections, botões principais, seções de destaque, estatísticas

### Gradiente Hover (Invertido)
```css
background: linear-gradient(135deg, #FFD43B 0%, #FFB300 30%, #FF6A00 65%, #E55300 100%);
```
**Uso**: Estados hover de botões e elementos interativos

---

## 📊 Aplicações no Site

### Modo Claro
- **Fundo**: `#ffffff` com secundário `#f8f8f8`
- **Texto**: `#1a1a1a` (principal), `#4a4a4a` (secundário)
- **Destaques**: Gradiente laranja-amarelo
- **Bordas**: `rgba(229, 83, 0, 0.15)`
- **Sombras**: `rgba(229, 83, 0, 0.1)`

### Modo Escuro
- **Fundo**: `#000000` com secundário `#0a0a0a`
- **Texto**: `#E5E5E5` (principal), `#b8b8b8` (secundário)
- **Destaques**: Gradiente laranja-amarelo (mantido vibrante)
- **Bordas**: `rgba(255, 106, 0, 0.2)`
- **Sombras**: `rgba(0, 0, 0, 0.5)`

---

## 🎯 Componentes Atualizados

### Botões Primários
```css
background: linear-gradient(135deg, #E55300, #FF6A00, #FFB300, #FFD43B);
color: #FFFFFF;
```

### Links e Navegação
```css
color: #1a1a1a; /* texto padrão */
hover: #FF6A00; /* laranja médio */
active: gradiente completo
```

### Cards e Elementos Interativos
```css
border-hover: #FF6A00;
shadow: rgba(255, 106, 0, 0.3);
```

### Hero Section
```css
background: gradiente laranja-amarelo completo
overlay: rgba(0, 0, 0, 0.2) para contraste de texto
```

---

## 🌈 Psicologia das Cores

- **Laranja**: Energia, entusiasmo, inovação, calor
- **Amarelo**: Otimismo, clareza, atenção, positividade
- **Preto**: Sofisticação, poder, elegância, profissionalismo
- **Branco**: Pureza, simplicidade, clareza, modernidade

### Combinação Laranja-Amarelo-Preto
Transmite uma mensagem de **inovação energética com base sólida e profissional**, perfeita para uma empresa de tecnologia focada em segurança e eficiência.

---

## 📱 Acessibilidade

- **Contraste WCAG AAA**: Texto branco sobre gradiente laranja-amarelo
- **Contraste WCAG AA**: Texto escuro (#1a1a1a) sobre fundos claros
- **Foco visível**: Borda `#FF6A00` com shadow suave
- **Estados hover**: Mudança clara de cor e elevação

---

## 🔧 Variáveis CSS

```css
/* Cores primárias */
--primary-orange: #FF6A00;
--primary-orange-dark: #E55300;
--primary-orange-light: #FFB300;
--primary-yellow: #FFD43B;
--primary-black: #000000;
--primary-white: #FFFFFF;

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #E55300 0%, #FF6A00 35%, #FFB300 70%, #FFD43B 100%);
--gradient-hover: linear-gradient(135deg, #FFD43B 0%, #FFB300 30%, #FF6A00 65%, #E55300 100%);
```

---

## 📦 Arquivos Relacionados

- `exau.html` - Implementação completa da paleta
- `palette.json` - Definição estruturada das cores
- `Logo.jpg` - Fonte original das cores
- `CHANGELOG.md` - Histórico de mudanças

---

## ✅ Checklist de Implementação

- [x] Variáveis CSS definidas
- [x] Modo claro configurado
- [x] Modo escuro configurado
- [x] Gradientes implementados
- [x] Botões atualizados
- [x] Hero section com gradiente
- [x] Cards e elementos interativos
- [x] Formulários
- [x] Footer
- [x] Estados hover e active
- [x] Contraste de acessibilidade validado

---

**Última atualização**: 18 de outubro de 2025  
**Versão da paleta**: 2.0 - Laranja Vibrante  
**Autor**: Equipe Exaustech
