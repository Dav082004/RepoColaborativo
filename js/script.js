// Script principal para funcionalidades interactivas
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  // Configurar efectos de parallax
  setupParallaxEffects();

  // Configurar efectos de hover en tarjetas
  setupCardEffects();

  // Configurar navegación suave
  setupSmoothNavigation();

  // Inicializar contadores animados
  initializeCounters();

  // Configurar efectos de typing en el título
  setupTypingEffect();

  // Configurar partículas de fondo
  setupBackgroundParticles();
}

// Efectos de parallax suaves
function setupParallaxEffects() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".floating-icons");

    parallaxElements.forEach((element) => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Efectos especiales en las tarjetas de colaboradores
function setupCardEffects() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".contributor-card");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Solo aplicar efecto si el mouse está sobre la tarjeta
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateY(-10px) 
                    scale(1.02)
                `;
      }
    });
  });

  // Resetear transformación cuando el mouse sale
  document.querySelectorAll(".contributor-card").forEach((card) => {
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// Navegación suave mejorada
function setupSmoothNavigation() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calcular offset para mejor posicionamiento
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Agregar efecto de highlight temporal
        targetElement.style.transition = "all 0.3s ease";
        targetElement.style.transform = "scale(1.02)";

        setTimeout(() => {
          targetElement.style.transform = "";
        }, 300);
      }
    });
  });
}

// Contadores animados mejorados
function initializeCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const options = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        animateCounter(entry.target);
        entry.target.dataset.counted = "true";
      }
    });
  }, options);

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(
    element.id.includes("contributors")
      ? contributors.length
      : element.id.includes("commits")
      ? contributors.length * 2
      : Math.min(contributors.length, 8)
  );

  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 40);
}

// Efecto de escritura en el título
function setupTypingEffect() {
  const titleElement = document.querySelector(".gradient-text");
  if (!titleElement) return;

  const originalText = titleElement.textContent;
  titleElement.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      titleElement.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      // Agregar cursor parpadeante temporal
      const cursor = document.createElement("span");
      cursor.textContent = "|";
      cursor.style.animation = "blink 1s infinite";
      titleElement.appendChild(cursor);

      // Remover cursor después de 3 segundos
      setTimeout(() => cursor.remove(), 3000);
    }
  };

  // Iniciar efecto después de un pequeño delay
  setTimeout(typeWriter, 1000);
}

// Sistema de partículas de fondo sutil
function setupBackgroundParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Crear contenedor de partículas
  const particlesContainer = document.createElement("div");
  particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 1;
    `;

  hero.appendChild(particlesContainer);

  // Crear partículas
  for (let i = 0; i < 20; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement("div");
  const size = Math.random() * 4 + 1;

  particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 20 + 10}s linear infinite;
    `;

  container.appendChild(particle);

  // Remover partícula después de la animación y crear una nueva
  setTimeout(() => {
    particle.remove();
    createParticle(container);
  }, (Math.random() * 20 + 10) * 1000);
}

// Agregar CSS para animaciones adicionales
const additionalStyles = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${
              Math.random() * 200 - 100
            }px);
            opacity: 0;
        }
    }
    
    .contributor-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .hero-content > * {
        opacity: 0;
        animation: fadeInUp 1s ease-out forwards;
    }
    
    .hero-content > *:nth-child(1) { animation-delay: 0.2s; }
    .hero-content > *:nth-child(2) { animation-delay: 0.4s; }
    .hero-content > *:nth-child(3) { animation-delay: 0.6s; }
`;

// Inyectar estilos adicionales
const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
