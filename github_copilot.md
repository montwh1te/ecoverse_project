# Documento de Proposta de Projeto Final

**Nome do site:** EcoVerse - Sua Loja Sustentável

**Nome dos integrantes do grupo:** [Seu Nome Aqui / Nome da Dupla / Nome do Trio]

---

## Descrição do Site
O **EcoVerse** é um site de e-commerce (loja virtual) focado na venda de produtos ecológicos e sustentáveis. O projeto tem como objetivo criar uma plataforma com design moderno, limpo e totalmente responsivo, aplicando a abordagem **Mobile-First**.

A experiência do usuário será focada em uma navegação intuitiva, que facilite a descoberta de produtos e a conscientização sobre um estilo de vida mais sustentável. O front-end será desenvolvido do zero, utilizando as melhores práticas de HTML5 semântico, CSS3 e JavaScript, para garantir um site performático, acessível e visualmente agradável em qualquer dispositivo.

---

## Áreas do Site
O site será estruturado nas **7 páginas/seções** a seguir para cumprir os requisitos mínimos:

### 1. Página Inicial (Home)
* **Conteúdo:** Será a porta de entrada do site. Conterá um menu de navegação responsivo, um banner principal (carrossel) destacando promoções ou novos produtos, uma seção de "Produtos em Destaque" e uma chamada para ação (CTA) para a página "Sobre Nós".
* **Plugin JS:** Utilização de um plugin de **Carrossel/Slider** para o banner principal.

### 2. Loja (Vitrine de Produtos)
* **Conteúdo:** Apresentará todos os produtos disponíveis em um grid responsivo (usando Flexbox ou CSS Grid). Haverá opções simuladas de filtro (ex: por categoria, por preço) para demonstrar a estrutura da interface. Cada produto terá uma imagem, nome, preço e um botão "Ver Detalhes".

### 3. Página de Detalhes do Produto
* **Conteúdo:** Página acessada ao clicar em um produto na vitrine. Apresentará a **Galeria de Fotos** do produto, descrição completa, preço e um botão "Adicionar ao Carrinho".
* **Galeria:** A galeria de fotos será o foco desta página, atendendo ao requisito.
* **Plugin JS:** Uma seção de "Informações Adicionais" (como composição, modo de uso, etc.) será implementada usando um plugin de **Accordion/Sanfona**, cumprindo o segundo requisito de plugin.

### 4. Sobre Nós
* **Conteúdo:** Uma página institucional que conta a história e a missão da marca EcoVerse. Utilizará uma combinação de textos e imagens, com efeitos sutis de animação em CSS (`transitions`, `transform`) quando o usuário rolar a página.

### 5. Blog / Dicas Sustentáveis
* **Conteúdo:** Uma página com uma lista de artigos (simulados) sobre sustentabilidade para engajar o cliente. A estrutura será de cards, cada um com uma imagem, título e um resumo do post.

### 6. Contato
* **Conteúdo:** Esta página conterá o formulário obrigatório do projeto.
* **Formulário:** Terá no mínimo 5 campos:
    1.  Nome Completo (`<input type="text">`)
    2.  E-mail (`<input type="email">` com validação de front-end)
    3.  Assunto (`<input type="text">`)
    4.  Mensagem (`<textarea>`)
    5.  Checkbox para aceitar receber novidades (`<input type="checkbox">`)

### 7. FAQ (Perguntas Frequentes)
* **Conteúdo:** Uma página para responder às dúvidas mais comuns dos clientes sobre entregas, pagamentos, etc. A estrutura será ideal para reutilizar o plugin de **Accordion/Sanfona**, onde cada pergunta é um item que expande para mostrar a resposta.

---

## Wireframes (Descrição da Estrutura)

### Visão Mobile (Mobile-First)
* **Layout:** Coluna única. Todo o conteúdo será empilhado verticalmente para facilitar a rolagem.
* **Menu:** O menu de navegação será do tipo "hambúrguer", que se expande em tela cheia ou como uma barra lateral ao ser tocado.
* **Elementos:** Botões e links terão áreas de clique maiores para facilitar o uso em telas de toque. As fontes serão maiores para garantir a legibilidade. A vitrine de produtos exibirá 1 ou 2 produtos por linha.

### Visão Desktop/Tablet
* **Layout:** O layout se adaptará para múltiplas colunas. A vitrine de produtos exibirá 3 ou 4 produtos por linha.
* **Menu:** O menu de navegação principal ficará sempre visível no topo da página.
* **Conteúdo:** A página inicial poderá ter o banner principal ao lado de uma área de texto. A página "Sobre Nós" poderá ter a imagem de um lado e o texto do outro. O design aproveitará o espaço horizontal extra para criar uma experiência visual mais rica.

---

## Como este projeto atende aos Requisitos Técnicos

### HTML5 Semântico
Serão usadas tags como `<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<aside>` para estruturar o conteúdo de forma correta e semântica.

### CSS3 Avançado
* **Flexbox e/ou CSS Grid:** Para criar os layouts responsivos da vitrine e outras seções.
* **Media Queries:** Serão definidas com base no conteúdo para garantir que o layout quebre nos pontos corretos, seguindo a abordagem Mobile-First.
* **Propriedades Gráficas:** Uso de `box-shadow` em cards e botões, `border-radius` para elementos arredondados, `gradients` sutis em fundos e `transitions` para animações de hover.
* **Fontes Externas:** Será utilizada a biblioteca Google Fonts para a tipografia do site.

### JavaScript
* **Manipulação de Eventos:** Para o menu hambúrguer, validação de formulário e interações customizadas.
* **Plugins (jQuery/JS Puro):** Implementação de um Carrossel na Home e um Accordion nas páginas de Produto e FAQ.

### Otimização
* As imagens serão comprimidas para a web (usando ferramentas online como TinyPNG).
* Os arquivos CSS e JS serão minificados na versão final.
* Será feito o *lazy loading* de imagens, se aplicável.

### Desafios
* O projeto será versionado usando **GIT** e hospedado em uma plataforma como GitHub Pages, Netlify ou Vercel para o Deploy.
* **Validação W3C:** O código HTML e CSS será periodicamente validado para garantir que está livre de erros.

---
*Este escopo garante que todos os requisitos da disciplina sejam cumpridos de maneira coesa e dentro de um projeto com apelo de mercado.*