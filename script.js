// Dados das práticas sustentáveis
const praticasData = [
    {
        titulo: "Agricultura Regenerativa",
        descricao: "Técnicas que restauram a saúde do solo e aumentam a biodiversidade",
        imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=200&fit=crop",
        cor: "#4caf50"
    },
    {
        titulo: "Energia Solar",
        descricao: "100% da energia utilizada vem de fontes renováveis",
        imagem: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop",
        cor: "#ff9800"
    },
    {
        titulo: "Captação de Água",
        descricao: "Sistemas inteligentes para reuso e conservação hídrica",
        imagem: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=300&h=200&fit=crop",
        cor: "#2196f3"
    },
    {
        titulo: "Compostagem",
        descricao: "Transformação de resíduos orgânicos em adubo natural",
        imagem: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop",
        cor: "#8bc34a"
    },
    {
        titulo: "Rotação de Culturas",
        descricao: "Prática que mantém o solo fértil e reduz pragas",
        imagem: "https://images.unsplash.com/photo-1592982537444-7440770cbfd9?w=300&h=200&fit=crop",
        cor: "#cddc39"
    },
    {
        titulo: "Agricultura de Precisão",
        descricao: "Tecnologia para otimizar recursos e reduzir desperdícios",
        imagem: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=300&h=200&fit=crop",
        cor: "#009688"
    }
];

// Função para carregar as práticas
function carregarPraticas() {
    const grid = document.getElementById('praticas-grid');
    if (!grid) return;

    praticasData.forEach(pratica => {
        const card = document.createElement('div');
        card.className = 'pratica-card';
        card.innerHTML = `
            <div class="pratica-image" style="background-image: url('${pratica.imagem}')"></div>
            <div class="pratica-content">
                <h3>${pratica.titulo}</h3>
                <p>${pratica.descricao}</p>
                <button class="cta-button" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="alert('Saiba mais sobre ${pratica.titulo}')">
                    Saiba mais
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Animações dos números
function animateNumbers() {
    const numbers = document.querySelectorAll('.impacto-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current).toLocaleString();
                    }
                }, 20);
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    numbers.forEach(number => observer.observe(number));
}

// Smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Menu mobile
function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '2rem';
            navLinks.style.textAlign = 'center';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
    }
}

// Formulário de contato
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (nome && email && mensagem) {
                alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
                form.reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Parallax effect for hero section
function setupParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }
}

// Add animation on scroll
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Função para mudar a cor do header ao scroll
function changeHeaderColor() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarPraticas();
    animateNumbers();
    setupMobileMenu();
    setupContactForm();
    setupHeaderScroll();
    setupParallax();
    setupScrollAnimations();
    
    // Adiciona evento de scroll para mudar cor do header
    window.addEventListener('scroll', changeHeaderColor);
    
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Adiciona efeito de hover nos cards de práticas
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.pratica-card')) {
        const card = e.target.closest('.pratica-card');
        card.style.transform = 'translateY(-10px)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.pratica-card')) {
        const card = e.target.closest('.pratica-card');
        card.style.transform = 'translateY(0)';
    }
});