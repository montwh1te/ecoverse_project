/* ============================================
   PRODUTOS DATABASE - Dinâmico
   ============================================ */

const produtos = {
    1: {
        nome: "Garrafa Reutilizável",
        precoOriginal: 89.90,
        precoAtual: 67.43,
        desconto: 25,
        imagem: "../assets/images/produto-1.webp",
        descricao: "Garrafa de vidro com proteção térmica premium. Mantém bebidas frias por 24h ou quentes por 12h. Design elegante e seguro para o dia a dia.",
        features: [
            "Vidro temperado resistente",
            "Proteção térmica 24h",
            "Livre de BPA",
            "Garantia de 2 anos"
        ],
        especificacoes: {
            "Material": "Vidro temperado + proteção térmica",
            "Capacidade": "750 ml",
            "Peso": "350g",
            "Dimensões": "8.5cm × 26cm",
            "Cores": "4 opções",
            "Isolamento": "24h frio / 12h quente"
        },
        ambiental: [
            "🌍 Vidro 100% reciclável",
            "🌱 Zero plástico tóxico",
            "🏭 Produção sustentável",
            "📦 Embalagem reciclável",
            "💚 Durável por muitos anos",
            "🌳 Reutilizável indefinidamente"
        ],
        usageSteps: [
            "Lave com água morna antes do uso",
            "Preencha com bebida desejada",
            "Feche bem a tampa",
            "Aproveite a bebida em temperatura ideal"
        ],
        careTips: [
            "Lavar com cuidado para não quebrar",
            "Evitar choques térmicos",
            "Secar bem antes de guardar",
            "Não expor ao freezer"
        ],
        rating: 4.5,
        reviews: 124,
        relatedProducts: [2, 3, 5, 7]
    },
    2: {
        nome: "Kit Utensílios Bambu",
        precoOriginal: 49.90,
        precoAtual: 34.90,
        desconto: 30,
        imagem: "../assets/images/produto-2.webp",
        descricao: "Talheres e palhetas de bambu 100% biodegradável. Kit completo com garfo, faca, colher e duas palhetas reutilizáveis. Perfeito para levar à escola ou trabalho.",
        features: [
            "100% bambu biodegradável",
            "5 peças no kit",
            "Bolsa de transporte incluída",
            "Sustentável e eco-friendly"
        ],
        especificacoes: {
            "Material": "Bambu orgânico certificado",
            "Peças": "5 (garfo, faca, colher, 2 palhetas)",
            "Peso": "150g",
            "Dimensões": "Padrão (19cm)",
            "Acompanhamento": "Bolsa de lona",
            "Biodegradável": "Sim, em 6 meses"
        },
        ambiental: [
            "🌍 Bambu de crescimento rápido",
            "🌱 100% biodegradável",
            "🏭 Zero químicos prejudiciais",
            "📦 Embalagem de papel",
            "💚 Reduz resíduos plásticos",
            "🌳 Cultivo sustentável"
        ],
        usageSteps: [
            "Retire o kit da bolsa",
            "Limpe com pano úmido antes de usar",
            "Use normalmente",
            "Lave após cada refeição"
        ],
        careTips: [
            "Lavar à mão com água",
            "Deixar secar completamente",
            "Guardar em local seco",
            "Compostar quando não usar mais"
        ],
        rating: 4.6,
        reviews: 95,
        relatedProducts: [1, 3, 5, 8]
    },
    3: {
        nome: "Sacola Ecológica",
        precoOriginal: 55.90,
        precoAtual: 39.90,
        desconto: 29,
        imagem: "../assets/images/produto-3.jpg",
        descricao: "Sacola feita com algodão orgânico 100%. Resistente e durável para compras do dia a dia. Reduz o uso de sacolas plásticas em até 500 por ano!",
        features: [
            "Algodão orgânico certificado",
            "Muito resistente",
            "Múltiplos compartimentos",
            "Design moderno e elegante"
        ],
        especificacoes: {
            "Material": "Algodão 100% orgânico",
            "Capacidade": "25L",
            "Peso": "200g",
            "Dimensões": "42cm × 38cm × 12cm",
            "Alças": "Reforçadas",
            "Resistência": "Até 15kg"
        },
        ambiental: [
            "🌍 Algodão orgânico",
            "🌱 Biodegradável completamente",
            "🏭 Cultivo sem químicos",
            "📦 Reduz sacolas plásticas",
            "💚 Durável por anos",
            "🌳 Sustém agricultores locais"
        ],
        usageSteps: [
            "Use para fazer compras",
            "Lave quando necessário",
            "Deixe secar ao ar",
            "Reutilize indefinidamente"
        ],
        careTips: [
            "Lavar com água fria",
            "Usar sabão neutro",
            "Secar naturalmente",
            "Guardar em local seco"
        ],
        rating: 4.4,
        reviews: 112,
        relatedProducts: [1, 2, 7, 8]
    },
    4: {
        nome: "Escova de Dentes Bambu",
        precoOriginal: 24.90,
        precoAtual: 16.50,
        desconto: 34,
        imagem: "../assets/images/produto-4.jpg",
        descricao: "Escova biodegradável com cerdas naturais. Pack com 3 unidades para toda a família. 100% sustentável e eficaz na limpeza.",
        features: [
            "100% biodegradável",
            "Cerdas naturais macias",
            "Pack com 3 unidades",
            "Sustentável e seguro"
        ],
        especificacoes: {
            "Quantidade": "3 escovas",
            "Material": "Bambu + cerdas naturais",
            "Peso": "45g cada",
            "Dimensões": "19cm × 1.5cm",
            "Biodegradável": "Sim, em 5 meses",
            "Durabilidade": "3-4 meses cada"
        },
        ambiental: [
            "🌍 Bambu sustentável",
            "🌱 100% biodegradável",
            "🏭 Zero microplásticos",
            "📦 Embalagem de papel",
            "💚 Reduz plástico no oceano",
            "🌳 Não usa cerdas sintéticas"
        ],
        usageSteps: [
            "Umedeça a escova",
            "Aplique pasta de dente",
            "Escove normalmente",
            "Lave com água"
        ],
        careTips: [
            "Deixar secar em pé",
            "Trocar a cada 3-4 meses",
            "Compostar quando desgastada",
            "Guardar em local seco"
        ],
        rating: 4.7,
        reviews: 143,
        relatedProducts: [1, 2, 5, 6]
    },
    5: {
        nome: "Copo Reutilizável",
        precoOriginal: 35.90,
        precoAtual: 25.90,
        desconto: 28,
        imagem: "../assets/images/produto-5.jpg",
        descricao: "Copo de bamboo com tampa hermética. Ideal para bebidas quentes e frias. Design compacto e moderno que cabe em qualquer bolsa.",
        features: [
            "Bamboo natural e seguro",
            "Tampa hermética",
            "Isolamento térmico",
            "Fácil de transportar"
        ],
        especificacoes: {
            "Capacidade": "450ml",
            "Material": "Bamboo + silicone alimentar",
            "Peso": "180g",
            "Dimensões": "8cm × 12cm",
            "Cores": "5 opções",
            "Isolamento": "Quentes e frias"
        },
        ambiental: [
            "🌍 Bamboo 100% natural",
            "🌱 Biodegradável em 2 anos",
            "🏭 Zero desperdício",
            "📦 Embalagem compostável",
            "💚 Reduz plástico",
            "🌳 Cultivo sustentável"
        ],
        usageSteps: [
            "Lave antes do primeiro uso",
            "Preencha com bebida",
            "Feche a tampa",
            "Leve para qualquer lugar"
        ],
        careTips: [
            "Lavar à mão com cuidado",
            "Deixar secar naturalmente",
            "Guardar sem tampa",
            "Evitar micro-ondas"
        ],
        rating: 4.5,
        reviews: 127,
        relatedProducts: [1, 2, 4, 6]
    },
    6: {
        nome: "Shampoo Sólido Natural",
        precoOriginal: 38.90,
        precoAtual: 27.50,
        desconto: 29,
        imagem: "../assets/images/produto-6.jpg",
        descricao: "Shampoo sólido com ingredientes 100% naturais. Dura 3x mais que líquido. Sem sulfatos, parabenos ou químicos prejudiciais. Apto para todos os tipos de cabelo.",
        features: [
            "100% ingredientes naturais",
            "Dura 3x mais",
            "Sem sulfatos",
            "Todos os tipos de cabelo"
        ],
        especificacoes: {
            "Peso": "75g",
            "Material": "Plantas e óleos naturais",
            "Rendimento": "250ml shampoo",
            "Tipo": "Universal",
            "Fragrância": "Óleos essenciais naturais",
            "Validade": "2 anos"
        },
        ambiental: [
            "🌍 Zero plástico",
            "🌱 Ingredientes orgânicos",
            "🏭 Cruelty-free",
            "📦 Embalagem biodegradável",
            "💚 Reduz água desperdiçada",
            "🌳 Carbono neutro"
        ],
        usageSteps: [
            "Umedeça o cabelo",
            "Esfregue o shampoo",
            "Faça espuma",
            "Enxague bem"
        ],
        careTips: [
            "Deixar secar entre usos",
            "Guardar em local seco",
            "Usar com água filtrada",
            "Dura 3-4 meses"
        ],
        rating: 4.6,
        reviews: 156,
        relatedProducts: [1, 4, 5, 8]
    },
    7: {
        nome: "Bolsa Compras Sustentável",
        precoOriginal: 65.90,
        precoAtual: 46.50,
        desconto: 29,
        imagem: "../assets/images/produto-7.jpg",
        descricao: "Bolsa em lona orgânica com compartimentos inteligentes. Perfeita para compras e uso diário. Resistente e durável por muitos anos.",
        features: [
            "Lona 100% orgânica",
            "Vários compartimentos",
            "Muito resistente",
            "Design elegante"
        ],
        especificacoes: {
            "Material": "Lona orgânica",
            "Capacidade": "30L",
            "Peso": "450g",
            "Dimensões": "45cm × 40cm × 15cm",
            "Compartimentos": "4 principais",
            "Alças": "Reforçadas"
        },
        ambiental: [
            "🌍 Lona 100% orgânica",
            "🌱 Biodegradável",
            "🏭 Cultivo sustentável",
            "📦 Embalagem mínima",
            "💚 Durável anos",
            "🌳 Apoia comunidades locais"
        ],
        usageSteps: [
            "Use para compras",
            "Lave quando necessário",
            "Seque ao ar",
            "Reutilize"
        ],
        careTips: [
            "Lavar com água fria",
            "Sabão neutro",
            "Secar naturalmente",
            "Guardar seco"
        ],
        rating: 4.7,
        reviews: 98,
        relatedProducts: [1, 3, 5, 8]
    },
    8: {
        nome: "Desodorante Natural",
        precoOriginal: 32.90,
        precoAtual: 21.00,
        desconto: 36,
        imagem: "../assets/images/produto-8.jpg",
        descricao: "Desodorante natural livre de alumínio e parabenos. Fórmula com óleos essenciais que mantém você fresco o dia todo sem prejudicar a saúde.",
        features: [
            "Sem alumínio",
            "Sem parabenos",
            "Óleos essenciais naturais",
            "Longa duração"
        ],
        especificacoes: {
            "Peso": "50g",
            "Material": "Óleos e ceras naturais",
            "Tipo": "Cremoso",
            "Fragrância": "Lavanda e camomila",
            "Durabilidade": "3 meses aprox",
            "Embalagem": "Vidro reciclável"
        },
        ambiental: [
            "🌍 Zero alumínio",
            "🌱 Ingredientes naturais",
            "🏭 Não testado em animais",
            "📦 Vidro reutilizável",
            "💚 100% biodegradável",
            "🌳 Apoia cooperativas"
        ],
        usageSteps: [
            "Aplique nas axilas limpas",
            "Distribua uniformemente",
            "Deixe secar",
            "Reaplicar conforme necessário"
        ],
        careTips: [
            "Manter bem fechado",
            "Guardar em local fresco",
            "Agitar antes de usar",
            "Durabilidade maior em clima seco"
        ],
        rating: 4.6,
        reviews: 118,
        relatedProducts: [4, 5, 6, 7]
    }
};

// ============ CARREGAR PRODUTO DINÂMICO ============
function carregarProduto() {
    // Obter ID da URL
    const params = new URLSearchParams(window.location.search);
    const produtoId = parseInt(params.get('id')) || 1;
    
    const produto = produtos[produtoId];
    
    if (!produto) {
        document.body.innerHTML = '<h1 style="text-align: center; padding: 50px;">Produto não encontrado!</h1>';
        return;
    }
    
    // Atualizar título
    document.getElementById('productTitle').textContent = produto.nome;
    document.getElementById('breadcrumbProduct').textContent = produto.nome;
    
    // Atualizar preços
    document.getElementById('originalPrice').textContent = `R$ ${produto.precoOriginal.toFixed(2).replace('.', ',')}`;
    document.getElementById('currentPrice').textContent = `R$ ${produto.precoAtual.toFixed(2).replace('.', ',')}`;
    
    // Atualizar desconto
    document.getElementById('discountBadge').textContent = `-${produto.desconto}%`;
    
    // Atualizar descrição
    document.getElementById('productDescription').textContent = produto.descricao;
    
    // Atualizar rating com estrelas corretas
    const starsCount = Math.floor(produto.rating);
    const hasHalfStar = produto.rating % 1 !== 0;
    const stars = '★'.repeat(starsCount) + (hasHalfStar ? '☆' : '') + '☆'.repeat(5 - starsCount - (hasHalfStar ? 1 : 0));
    document.getElementById('productStars').textContent = stars;
    document.getElementById('productRating').textContent = `(${produto.reviews} avaliações)`;
    
    // Atualizar features
    const featuresHTML = produto.features.map(f => `
        <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>${f}</span>
        </div>
    `).join('');
    document.getElementById('featuresContainer').innerHTML = featuresHTML;
    
    // Atualizar imagem
    carregarImagens(produto.imagem);
    
    // Atualizar especificações
    const specsHTML = Object.entries(produto.especificacoes).map(([label, value]) => `
        <div class="spec-row">
            <span class="spec-label">${label}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    document.getElementById('specifications').innerHTML = specsHTML;
    
    // Atualizar info ambiental
    const ambiental = produto.ambiental.map(info => `<li>${info}</li>`).join('');
    document.getElementById('environmentalInfo').innerHTML = ambiental;
    
    // Atualizar instruções de uso
    const steps = produto.usageSteps.map(step => `<li>${step}</li>`).join('');
    document.getElementById('usageSteps').innerHTML = steps;
    
    // Atualizar dicas de cuidado
    const tips = produto.careTips.map(tip => `<li>${tip}</li>`).join('');
    document.getElementById('careTips').innerHTML = tips;
    
    // Atualizar botão adicionar ao carrinho
    document.getElementById('addToCartBtn').onclick = function() {
        const quantity = document.getElementById('quantity').value;
        const color = document.getElementById('color').value;
        showNotification(`✅ ${quantity}x ${produto.nome} adicionado ao carrinho!`);
    };
    
    // Atualizar botão favoritar
    document.getElementById('favoriteBtn').addEventListener('click', function() {
        this.classList.toggle('favorited');
        if (this.classList.contains('favorited')) {
            showNotification('❤️ Adicionado aos favoritos!');
        } else {
            showNotification('💔 Removido dos favoritos');
        }
    });
    
    // Carregar produtos relacionados
    carregarProdutosRelacionados(produto.relatedProducts, produtoId);
}

// ============ CARREGAR IMAGEM ============
function carregarImagens(imagem) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imagem;
    mainImage.alt = 'Imagem do produto';
    
    // Ocultar container de thumbnails já que temos apenas 1 imagem
    const thumbnailsContainer = document.getElementById('thumbnailsContainer');
    if (thumbnailsContainer) {
        thumbnailsContainer.style.display = 'none';
    }
}

// ============ CARREGAR PRODUTOS RELACIONADOS ============
function carregarProdutosRelacionados(relatedIds, produtoAtualId) {
    const htmlProdutos = relatedIds
        .filter(id => id !== produtoAtualId)
        .slice(0, 4)
        .map(id => {
            const prod = produtos[id];
            return `
                <div class="product-card">
                    <img src="${prod.imagem}" alt="${prod.nome}">
                    <h3>${prod.nome}</h3>
                    <p class="product-price">R$ ${prod.precoAtual.toFixed(2).replace('.', ',')}</p>
                    <a href="produto-detalhe.html?id=${id}" class="btn btn-secondary">Ver Detalhes</a>
                </div>
            `;
        }).join('');
    
    document.getElementById('relatedProductsGrid').innerHTML = htmlProdutos;
}

// ============ CONTROLES DE QUANTIDADE ============
document.addEventListener('DOMContentLoaded', function() {
    carregarProduto();
    
    document.getElementById('decreaseQty').addEventListener('click', function() {
        const qty = document.getElementById('quantity');
        if (qty.value > 1) qty.value--;
    });

    document.getElementById('increaseQty').addEventListener('click', function() {
        const qty = document.getElementById('quantity');
        if (qty.value < 50) qty.value++;
    });
});
