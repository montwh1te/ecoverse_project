/* ============================================
   ECOVERSE - JAVASCRIPT PRINCIPAL
   Funcionalidades Interativas
   ============================================ */

// ============ INICIALIZAÇÃO ============
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initCarousel();
    initAccordion();
});

// ============ MENU HAMBÚRGUER ============
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-main') && !event.target.closest('.menu-toggle')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============ CARROSSEL ============
function initCarousel() {
    const carousel = document.getElementById('carousel');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.getElementById('carouselDots');
    
    if (!carousel) return;
    
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    
    // Criar dots
    if (carouselDots) {
        items.forEach((item, index) => {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            carouselDots.appendChild(dot);
        });
    }
    
    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
        
        // Atualizar dots
        if (carouselDots) {
            const dots = carouselDots.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
            });
        }
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    // Event listeners para botões
    if (carouselNext) {
        carouselNext.addEventListener('click', nextSlide);
    }
    if (carouselPrev) {
        carouselPrev.addEventListener('click', prevSlide);
    }
    
    // Auto-play carousel (opcional)
    let autoplayInterval = setInterval(nextSlide, 5000);
    
    // Pausar ao passar o mouse
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
}

// ============ ACCORDION ============
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        // Se não tiver listener, adicionar
        if (!header.dataset.listenerAdded) {
            header.addEventListener('click', function(e) {
                // Evitar duplo clique
                if (e.target === this || e.target.closest('.accordion-header') === this) {
                    handleAccordionClick(this);
                }
            });
            header.dataset.listenerAdded = 'true';
        }
    });
}

function handleAccordionClick(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const isActive = content.classList.contains('active');
    
    // Fechar todos os acordeões do mesmo pai
    const accordion = header.closest('.accordion');
    if (accordion) {
        const allContents = accordion.querySelectorAll('.accordion-content.active');
        const allIcons = accordion.querySelectorAll('.accordion-header .accordion-icon');
        
        allContents.forEach(c => {
            if (c !== content) {
                c.classList.remove('active');
            }
        });
        
        allIcons.forEach(i => {
            if (i !== icon) {
                i.textContent = '+';
            }
        });
    }
    
    // Toggle do acordeão atual
    if (!isActive) {
        content.classList.add('active');
        icon.textContent = '−';
    } else {
        content.classList.remove('active');
        icon.textContent = '+';
    }
}

// ============ VALIDAÇÃO DE FORMULÁRIO ============
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateContactForm(fullName, email, subject, message) {
    let errors = {};
    
    if (fullName.trim().length < 3) {
        errors.fullName = 'Nome deve ter pelo menos 3 caracteres';
    }
    
    if (!validateEmail(email.trim())) {
        errors.email = 'Email inválido';
    }
    
    if (subject.trim().length < 5) {
        errors.subject = 'Assunto deve ter pelo menos 5 caracteres';
    }
    
    if (message.trim().length < 10) {
        errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

// ============ SCROLL SUAVE ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============ LAZY LOADING (Simulado) ============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============ ANIMAÇÕES AO SCROLL ============
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .blog-card, .value-card, .why-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

// Adicionar animação CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============ ROLAR PARA TOPO ============
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar botão de scroll to top quando necessário
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 99;
    font-size: 1.4rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', scrollToTop);

// ============ CONTADOR DE ITENS DO CARRINHO (Simulado) ============
function updateCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'block' : 'none';
    }
}

function addToCart() {
    const quantity = document.getElementById('quantity')?.value || 1;
    let cartCount = parseInt(localStorage.getItem('cartCount') || 0);
    cartCount += parseInt(quantity);
    localStorage.setItem('cartCount', cartCount);
    updateCartCount();
    
    // Notificação de sucesso
    showNotification(`${quantity} item(ns) adicionado(s) ao carrinho!`, 'success');
}

// ============ NOTIFICAÇÕES ============
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#2ecc71' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar estilos de notificação
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ============ BUSCA DE FAQ ============
function initFaqSearch() {
    const searchInput = document.getElementById('faqSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.accordion-item');
        let visibleCount = 0;
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Mensagem se nenhum resultado
        if (visibleCount === 0 && searchTerm.length > 0) {
            showNotification('Nenhum resultado encontrado', 'info');
        }
    });
}

document.addEventListener('DOMContentLoaded', initFaqSearch);

// ============ FILTROS DE LOJA ============
function initShopFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const priceRadios = document.querySelectorAll('input[name="price"]');
    const productCards = document.querySelectorAll('.product-card');
    const clearFiltersBtn = document.querySelector('.btn-secondary[style*="margin-top"]');
    
    // Dados dos produtos (categoria e preço)
    const productsData = [
        { index: 0, category: 'casa', price: 89.90 },
        { index: 1, category: 'casa', price: 45.00 },
        { index: 2, category: 'casa', price: 35.90 },
        { index: 3, category: 'higiene', price: 12.50 },
        { index: 4, category: 'casa', price: 28.90 },
        { index: 5, category: 'higiene', price: 25.00 },
        { index: 6, category: 'moda', price: 55.00 },
        { index: 7, category: 'higiene', price: 18.50 }
    ];
    
    const applyFilters = () => {
        const selectedCategories = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        const selectedPrice = Array.from(priceRadios)
            .find(r => r.checked)?.value;
        
        // Se não há filtros selecionados, mostra todos
        const hasFilters = selectedCategories.length > 0 || selectedPrice;
        
        productCards.forEach((card, index) => {
            const productInfo = productsData[index];
            let shouldShow = true;
            
            // Filtrar por categoria
            if (selectedCategories.length > 0) {
                shouldShow = selectedCategories.includes(productInfo.category);
            }
            
            // Filtrar por preço
            if (shouldShow && selectedPrice) {
                const price = productInfo.price;
                switch(selectedPrice) {
                    case 'ate-50':
                        shouldShow = price <= 50;
                        break;
                    case '50-100':
                        shouldShow = price > 50 && price <= 100;
                        break;
                    case '100-200':
                        shouldShow = price > 100 && price <= 200;
                        break;
                    case 'acima-200':
                        shouldShow = price > 200;
                        break;
                }
            }
            
            // Mostrar ou ocultar
            card.style.display = shouldShow ? 'flex' : 'none';
            card.style.animation = shouldShow ? 'fadeInUp 0.3s ease' : 'none';
        });
        
        // Verificar se há resultados
        const visibleCards = Array.from(productCards).filter(card => card.style.display !== 'none');
        showNotification(`${visibleCards.length} produto(s) encontrado(s)`, 'info');
    };
    
    // Limpar filtros
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            filterCheckboxes.forEach(cb => cb.checked = false);
            priceRadios.forEach(r => r.checked = false);
            productCards.forEach(card => card.style.display = 'flex');
            showNotification('Filtros limpos! Mostrando todos os produtos', 'info');
        });
    }
    
    // Event listeners
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    priceRadios.forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });
}

document.addEventListener('DOMContentLoaded', initShopFilters);

// ============ GALERIA DE FOTOS DO PRODUTO ============
function changeMainImage(src) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.style.opacity = '0.5';
        mainImage.src = src;
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 200);
    }
}

// ============ TRANSIÇÃO SUAVE DE OPACIDADE ============
const style2 = document.createElement('style');
style2.textContent = `
    #mainImage {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style2);

// ============ FORMULÁRIO DE CONTATO ============
function submitContactForm(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const subject = document.getElementById('subject')?.value || '';
    const message = document.getElementById('message')?.value || '';
    
    // Limpar erros anteriores
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    
    // Validar
    const validation = validateContactForm(fullName, email, subject, message);
    
    if (!validation.isValid) {
        Object.keys(validation.errors).forEach(field => {
            const errorEl = document.getElementById(`${field}Error`);
            if (errorEl) {
                errorEl.textContent = validation.errors[field];
            }
        });
        return;
    }
    
    // Simular envio
    const form = event.target;
    form.style.display = 'none';
    
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
    }
    
    // Resetar após 3 segundos
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        if (successMessage) {
            successMessage.style.display = 'none';
        }
    }, 3000);
}

// ============ NEWSLETTER ============
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (validateEmail(email)) {
        showSubscriptionPopup(email);
        event.target.reset();
    } else {
        showErrorPopup('Email inválido');
    }
}

// ============ POP-UP DE INSCRIÇÃO ============
function showSubscriptionPopup(email) {
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Criar popup
    const popup = document.createElement('div');
    popup.className = 'subscription-popup';
    popup.style.cssText = `
        background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
        border-radius: 16px;
        padding: 40px;
        max-width: 450px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        text-align: center;
        animation: popupSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-left: 5px solid #2ecc71;
        border-top: 2px solid #3498db;
    `;
    
    // Ícone de sucesso
    const icon = document.createElement('div');
    icon.style.cssText = `
        font-size: 64px;
        margin-bottom: 20px;
        animation: popupBounce 0.6s ease;
    `;
    icon.textContent = '✅';
    
    // Título
    const title = document.createElement('h2');
    title.textContent = 'Inscrição Realizada!';
    title.style.cssText = `
        color: #2ecc71;
        margin: 0 0 15px 0;
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        font-weight: 700;
    `;
    
    // Subtítulo
    const subtitle = document.createElement('p');
    subtitle.style.cssText = `
        color: #555;
        margin: 0 0 10px 0;
        font-size: 16px;
        line-height: 1.5;
    `;
    subtitle.textContent = 'Obrigado por se inscrever em nossa newsletter!';
    
    // Email confirmado
    const emailConfirm = document.createElement('p');
    emailConfirm.style.cssText = `
        background-color: #e8f8f5;
        color: #27ae60;
        padding: 12px 16px;
        border-radius: 8px;
        margin: 15px 0;
        font-weight: 600;
        border-left: 3px solid #2ecc71;
    `;
    emailConfirm.textContent = `📧 ${email}`;
    
    // Mensagem adicional
    const message = document.createElement('p');
    message.style.cssText = `
        color: #666;
        font-size: 14px;
        margin: 15px 0;
        line-height: 1.6;
    `;
    message.textContent = 'Você receberá nossos melhores artigos, dicas sustentáveis e promoções exclusivas diretamente no seu email!';
    
    // Botão fechar
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✓ Fechar';
    closeBtn.style.cssText = `
        background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
        color: white;
        border: none;
        padding: 12px 32px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(46, 204, 113, 0.3);
    `;
    
    closeBtn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 16px rgba(46, 204, 113, 0.4)';
    });
    
    closeBtn.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(46, 204, 113, 0.3)';
    });
    
    closeBtn.addEventListener('click', function() {
        overlay.style.animation = 'fadeOut 0.3s ease';
        popup.style.animation = 'popupSlideOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    });
    
    // Montar popup
    popup.appendChild(icon);
    popup.appendChild(title);
    popup.appendChild(subtitle);
    popup.appendChild(emailConfirm);
    popup.appendChild(message);
    popup.appendChild(closeBtn);
    
    // Montar overlay
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Fechar ao clicar no overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.animation = 'fadeOut 0.3s ease';
            popup.style.animation = 'popupSlideOut 0.3s ease';
            setTimeout(() => overlay.remove(), 300);
        }
    });
}

// ============ POP-UP DE ERRO ============
function showErrorPopup(message) {
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Criar popup de erro
    const popup = document.createElement('div');
    popup.className = 'error-popup';
    popup.style.cssText = `
        background: linear-gradient(135deg, #ffffff 0%, #fff5f5 100%);
        border-radius: 16px;
        padding: 40px;
        max-width: 450px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        text-align: center;
        animation: popupSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-left: 5px solid #e74c3c;
        border-top: 2px solid #c0392b;
    `;
    
    // Ícone de erro
    const icon = document.createElement('div');
    icon.style.cssText = `
        font-size: 64px;
        margin-bottom: 20px;
        animation: popupShake 0.5s ease;
    `;
    icon.textContent = '⚠️';
    
    // Título
    const title = document.createElement('h2');
    title.textContent = 'Oops!';
    title.style.cssText = `
        color: #e74c3c;
        margin: 0 0 15px 0;
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        font-weight: 700;
    `;
    
    // Mensagem de erro
    const errorMsg = document.createElement('p');
    errorMsg.textContent = message;
    errorMsg.style.cssText = `
        background-color: #fadbd8;
        color: #c0392b;
        padding: 12px 16px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 3px solid #e74c3c;
        font-weight: 600;
    `;
    
    // Botão fechar
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✓ Entendido';
    closeBtn.style.cssText = `
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        border: none;
        padding: 12px 32px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
    `;
    
    closeBtn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 16px rgba(231, 76, 60, 0.4)';
    });
    
    closeBtn.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
    });
    
    closeBtn.addEventListener('click', function() {
        overlay.style.animation = 'fadeOut 0.3s ease';
        popup.style.animation = 'popupSlideOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    });
    
    // Montar popup
    popup.appendChild(icon);
    popup.appendChild(title);
    popup.appendChild(errorMsg);
    popup.appendChild(closeBtn);
    
    // Montar overlay
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Fechar ao clicar no overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.animation = 'fadeOut 0.3s ease';
            popup.style.animation = 'popupSlideOut 0.3s ease';
            setTimeout(() => overlay.remove(), 300);
        }
    });
}

// ============ ANIMAÇÕES DO POP-UP ============
const popupStyles = document.createElement('style');
popupStyles.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    @keyframes popupSlideIn {
        from {
            opacity: 0;
            transform: scale(0.8) translateY(-30px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    @keyframes popupSlideOut {
        from {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        to {
            opacity: 0;
            transform: scale(0.8) translateY(-30px);
        }
    }
    
    @keyframes popupBounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    @keyframes popupShake {
        0%, 100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-10px);
        }
        75% {
            transform: translateX(10px);
        }
    }
`;
document.head.appendChild(popupStyles);

// ============ COMPATIBILIDADE COM NAVEGADORES ============
// Polyfill para IE 11 (se necessário)
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}

console.log('EcoVerse - Script Principal Carregado com Sucesso!');
