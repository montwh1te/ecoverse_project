# EcoVerse - Sua Loja Sustentável

## 📋 Descrição do Projeto

**EcoVerse** é um site de e-commerce completo desenvolvido com **HTML5 semântico, CSS3 responsivo (Mobile-First)** e **JavaScript puro**, focado na venda de produtos ecológicos e sustentáveis. O projeto atende a todos os requisitos da disciplina de Desenvolvimento Web para Dispositivos Móveis.

---

## ✨ Estrutura do Projeto

```
trabalho_final/
│
├── index.html                      # Página inicial (Home)
│
├── pages/
│   ├── loja.html                  # Vitrine de produtos
│   ├── produto-detalhe.html       # Detalhes do produto com galeria
│   ├── sobre.html                 # Página institucional
│   ├── blog.html                  # Blog - Dicas sustentáveis
│   ├── contato.html               # Formulário de contato (5+ campos)
│   └── faq.html                   # Perguntas frequentes (Accordion)
│
├── assets/
│   ├── css/
│   │   └── style.css              # Estilos CSS3 responsivos
│   │
│   ├── js/
│   │   └── main.js                # JavaScript com plugins
│   │
│   └── images/
│       ├── produto-1.webp          # Imagens dos produtos
│       ├── produto-2.webp
│       ├── ... (mais produtos)
│       ├── blog-1.jpg             # Imagens do blog
│       ├── about-hero.jpg         # Imagens institucionais
│       └── ...
│
├── README.md                       # Este arquivo
└── github_copilot.md              # Proposta original do projeto
```

---

## 🎯 Requisitos Atendidos

### ✅ 7 Páginas/Seções Obrigatórias

1. **Home (index.html)**
   - Menu de navegação responsivo
   - Carrossel com 3 slides
   - Seção "Produtos em Destaque"
   - CTA para "Sobre Nós"

2. **Loja (pages/loja.html)**
   - Grid responsivo com Flexbox/CSS Grid
   - Filtros simulados (categoria, preço)
   - 8 produtos disponíveis
   - Cards com imagem, nome, preço e botão "Ver Detalhes"

3. **Detalhes do Produto (pages/produto-detalhe.html)**
   - **Galeria de fotos** (4 imagens com thumbnails)
   - Descrição completa
   - Preço com desconto
   - Botão "Adicionar ao Carrinho"
   - **Accordion** com informações adicionais (composição, uso, limpeza, impacto)
   - Produtos relacionados

4. **Sobre Nós (pages/sobre.html)**
   - História da marca
   - Missão e valores
   - Estatísticas de impacto
   - Razões para escolher EcoVerse
   - Animações CSS ao scroll

5. **Blog (pages/blog.html)**
   - 6 artigos com cards
   - Categorias, autor e data
   - Paginação
   - Newsletter signup

6. **Contato (pages/contato.html)**
   - **Formulário com 5+ campos obrigatórios:**
     1. Nome Completo (text)
     2. Email (email com validação front-end)
     3. Assunto (text)
     4. Mensagem (textarea)
     5. Checkbox - Receber novidades
   - Validação de dados
   - Informações de contato
   - Mapa placeholder

7. **FAQ (pages/faq.html)**
   - **Accordion/Sanfona** com múltiplas categorias
   - Temas: Entregas, Pagamento, Produtos, Conta, Suporte
   - Busca de perguntas
   - 20+ perguntas frequentes

### ✅ HTML5 Semântico

- Tags semânticas: `<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`
- Meta tags: viewport, description
- Atributos de acessibilidade: `aria-label`, `role`
- Estrutura lógica e bem organizada

### ✅ CSS3 Avançado

- **Flexbox e CSS Grid** para layouts responsivos
- **Media Queries** com abordagem Mobile-First
  - Mobile: até 640px
  - Tablet: 640px a 1024px
  - Desktop: acima de 1024px
- **Propriedades gráficas:**
  - `box-shadow`: Sombras em cards e buttons
  - `border-radius`: Elementos arredondados
  - `background`: Gradientes em seções especiais
  - `transition`: Animações suaves
  - `transform`: Efeitos ao hover
- **Google Fonts:** Poppins e Playfair Display
- **CSS Variables:** Para cores, espaçamentos, sombras

### ✅ JavaScript - Plugins e Funcionalidades

1. **Menu Hambúrguer**
   - Toggle responsivo
   - Fechamento ao clicar fora
   - Ícone animado X

2. **Carrossel/Slider (Plugin)**
   - 3 slides com auto-play (5s)
   - Navegação com setas
   - Indicadores de dots
   - Pausa ao hover

3. **Accordion/Sanfona (Plugin)**
   - Abre/fecha com animação
   - Apenas um item aberto por vez
   - Ícone dinâmico (+/−)
   - Usado em: Produto, FAQ

4. **Validação de Formulário**
   - Email: regex validation
   - Nome: mínimo 3 caracteres
   - Assunto e Mensagem: mínimo 5/10 caracteres
   - Feedback de erros em tempo real

5. **Funcionalidades Extras:**
   - Lazy loading de imagens (Intersection Observer)
   - Scroll suave
   - Animações ao scroll
   - Botão "Scroll to Top"
   - Notificações toast
   - Busca em FAQ
   - Carrinho simulado (localStorage)

### ✅ Otimização

- **Compressão de imagens**: Placeholders em formato web otimizado
- **CSS/JS minificável**: Estrutura pronta para minificação
- **Performance**: 
  - Lazy loading implementado
  - Transições CSS eficientes
  - JavaScript assíncrono
- **Acessibilidade:** WCAG 2.1 considerada

### ✅ Versionamento Git

- Estrutura pronta para versionar
- Commits organizados por feature

### ✅ Validação W3C

- HTML semântico válido
- CSS3 compatível com navegadores modernos
- JavaScript ES6+ com polyfills para IE11

---

## 📱 Responsividade Mobile-First

### Breakpoints

| Dispositivo | Largura | Grid Produtos |
|------------|---------|----------------|
| **Mobile** | < 640px | 1 coluna |
| **Tablet** | 640px - 1024px | 2 colunas |
| **Desktop** | > 1024px | 4 colunas |

### Características Mobile

- ✓ Menu hambúrguer
- ✓ Coluna única com scroll vertical
- ✓ Botões e links com áreas amplas
- ✓ Fontes aumentadas para legibilidade
- ✓ Imagens responsivas

### Características Desktop

- ✓ Menu fixo horizontal
- ✓ Layout multi-coluna
- ✓ Sidebars e conteúdo lado a lado
- ✓ Hover effects e animações avançadas

---

## 🎨 Design e Paleta de Cores

```css
Primária:      #2ecc71 (Verde Eco)
Primária Dark: #27ae60
Secundária:    #3498db (Azul)
Accent:        #e74c3c (Vermelho)
Neutros:       #2c3e50, #95a5a6, #ecf0f1, #ffffff
```

---

## 🔧 Como Usar

### 1. Abrir o Projeto

```bash
# Clone ou extraia os arquivos
# Abra index.html no navegador
```

### 2. Estrutura de Navegação

- **Home**: Ponto de entrada com visão geral
- **Loja**: Busque e filtre produtos
- **Produto**: Veja detalhes, galeria e informações
- **Sobre**: Conheça a missão da EcoVerse
- **Blog**: Leia dicas de sustentabilidade
- **FAQ**: Respostas a perguntas frequentes
- **Contato**: Envie mensagens ou dúvidas

### 3. Testar Funcionalidades

- **Menu**: Clique no ícone hambúrguer no mobile
- **Carrossel**: Clique nas setas ou aguarde auto-play
- **Accordion**: Clique nas perguntas para expandir
- **Formulário**: Tente enviar com dados inválidos
- **Busca FAQ**: Digite para filtrar perguntas

---

## 📝 Formulário de Contato - Validação

**Campos Obrigatórios:**
1. **Nome Completo** - Mínimo 3 caracteres
2. **Email** - Formato válido (exemplo@email.com)
3. **Assunto** - Mínimo 5 caracteres
4. **Mensagem** - Mínimo 10 caracteres
5. **Checkbox** - Para receber novidades (opcional)

**Mensagens de Erro:**
- Aparecem abaixo do campo
- Em cor vermelha
- Desaparecem ao corrigir

---

## 🌐 Compatibilidade

| Navegador | Versão | Suporte |
|-----------|--------|---------|
| **Chrome** | 90+ | ✅ Completo |
| **Firefox** | 88+ | ✅ Completo |
| **Safari** | 14+ | ✅ Completo |
| **Edge** | 90+ | ✅ Completo |
| **IE 11** | - | ⚠️ Com polyfills |

---

## 📦 Dependências

**Nenhuma!** O projeto usa apenas:
- HTML5
- CSS3 (Puro)
- JavaScript (ES6 Vanilla)
- Google Fonts (CDN externo)

---

## 🚀 Próximos Passos (Sugestões)

1. **Banco de Dados**: Integrar com backend (Node.js, PHP, Python)
2. **Pagamento**: Implementar gateway de pagamento (Stripe, PayPal)
3. **Admin**: Painel para gerenciar produtos
4. **Busca**: Implementar busca de produtos
5. **Usuários**: Sistema de login e perfil
6. **PWA**: Converter para Progressive Web App
7. **SEO**: Otimização para mecanismos de busca
8. **Analytics**: Integrar Google Analytics

---

## 📄 Documentação Adicional

### Estrutura de Cores (CSS Variables)

```css
:root {
    --color-primary: #2ecc71;
    --color-secondary: #3498db;
    --color-accent: #e74c3c;
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
    /* ... mais variáveis */
}
```

### Breakpoints Media Queries

```css
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### JavaScript Principais

```javascript
initMenu()           // Menu hambúrguer
initCarousel()       // Carrossel automático
initAccordion()      // Accordion de FAQ/Produto
validateEmail()      // Validação de email
```

---

## 👨‍💼 Sobre o Projeto

Este é um projeto acadêmico para a disciplina **"Desenvolvimento Web para Dispositivos Móveis"** com foco em:

- ✓ Design Mobile-First responsivo
- ✓ Semântica HTML5
- ✓ CSS3 avançado
- ✓ JavaScript vanilla (sem frameworks)
- ✓ Acessibilidade e UX
- ✓ Performance web

---

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto:
- 📧 Email: contato@ecoverse.com.br
- 💬 Formulário de Contato: pages/contato.html
- ❓ FAQ: pages/faq.html

---

## 📜 Licença

Este projeto é fornecido como parte de um trabalho acadêmico. Você é livre para usar, modificar e distribuir conforme necessário para fins educacionais.

---

**Desenvolvido com ❤️ e 🌿 sustentabilidade em mente.**

*Versão 1.0 - Dezembro de 2024*
