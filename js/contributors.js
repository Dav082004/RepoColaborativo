// ============================================================================
// 🔧 FUNCIONES PARA RENDERIZAR COLABORADORES
// ============================================================================
// Este archivo contiene toda la lógica para mostrar las tarjetas de colaboradores
// Los datos están en contributors-data.js
// ============================================================================

// Función para obtener las iniciales del nombre
function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Función para generar un color basado en el nombre
function getColorFromName(name) {
  const colors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return colors[Math.abs(hash) % colors.length];
}

// Función para renderizar las tarjetas de colaboradores
function renderContributors() {
  const grid = document.getElementById("contributors-grid");

  if (!grid) return;

  grid.innerHTML = "";

  contributors.forEach((contributor, index) => {
    const card = document.createElement("div");
    card.className = "contributor-card";
    card.style.animationDelay = `${index * 0.1}s`;

    const initials = getInitials(contributor.name);
    const avatarColor = getColorFromName(contributor.name);

    // Determinar la imagen a usar
    let avatarHTML = "";
    if (contributor.image) {
      // Si tiene imagen personalizada, usarla
      avatarHTML = `
        <img src="${contributor.image}" alt="${contributor.name}" class="w-24 h-24 rounded-full mx-auto object-cover" style="margin-bottom: 1rem; display: block;" onerror="this.outerHTML='<div class=&quot;contributor-avatar&quot; style=&quot;background: ${avatarColor}&quot;>${initials}</div>'">`;
    } else if (contributor.github) {
      // Si tiene GitHub, usar el avatar automáticamente
      const githubUsername = contributor.github.split("/").pop();
      avatarHTML = `
        <img src="https://github.com/${githubUsername}.png" alt="${contributor.name}" class="w-24 h-24 rounded-full mx-auto object-cover" style="margin-bottom: 1rem; display: block;" onerror="this.outerHTML='<div class=&quot;contributor-avatar&quot; style=&quot;background: ${avatarColor}&quot;>${initials}</div>'">`;
    } else {
      // Si no tiene imagen ni GitHub, usar iniciales
      avatarHTML = `
        <div class="contributor-avatar" style="background: ${avatarColor}">
          ${initials}
        </div>`;
    }

    const hobbiesHTML = contributor.hobbies
      .slice(0, 4) // Máximo 4 hobbies
      .map((hobby) => `<span class="hobby-tag">${hobby}</span>`)
      .join("");

    const linkedinHTML = contributor.linkedin
      ? `<a href="${contributor.linkedin}" target="_blank" class="contributor-social-link linkedin">
                <i class="fab fa-linkedin"></i>
                LinkedIn
               </a>`
      : "";

    const githubHTML = contributor.github
      ? `<a href="${contributor.github}" target="_blank" class="contributor-social-link github">
                <i class="fab fa-github"></i>
                GitHub
               </a>`
      : "";

    card.innerHTML = `
            ${avatarHTML}
            <div class="contributor-name">${contributor.name}</div>
            <div class="contributor-nickname">@${contributor.nickname}</div>
            <div class="contributor-description">${
              contributor.description ||
              "Desarrollador apasionado por la tecnología"
            }</div>
            <div class="contributor-hobbies">
                ${hobbiesHTML}
            </div>
            <div class="contributor-social-links">
                ${githubHTML}
                ${linkedinHTML}
            </div>
        `;

    grid.appendChild(card);
  });
}

// Función para animar números
function animateNumber(element, finalNumber, duration = 2000) {
  let startNumber = 0;
  const increment = finalNumber / (duration / 16);

  const timer = setInterval(() => {
    startNumber += increment;
    if (startNumber >= finalNumber) {
      startNumber = finalNumber;
      clearInterval(timer);
    }
    element.textContent = Math.floor(startNumber);
  }, 16);
}

// Función para actualizar estadísticas
function updateStats() {
  const contributorsCount = contributors.length;

  // Animar números cuando sean visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const contributorsElement =
          document.getElementById("contributors-count");

        if (contributorsElement && !contributorsElement.dataset.animated) {
          animateNumber(contributorsElement, contributorsCount);
          contributorsElement.dataset.animated = "true";
        }

        observer.disconnect();
      }
    });
  });

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// Función para suavizar el scroll
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Función para añadir animaciones en scroll
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease forwards";
      }
    });
  }, observerOptions);

  // Observar elementos que queremos animar
  const elementsToAnimate = document.querySelectorAll(
    ".contributor-card, .step, .stat-item"
  );

  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });
}

// Función para validar los datos de contribuidores
function validateContributors() {
  const errors = [];

  contributors.forEach((contributor, index) => {
    if (!contributor.name || contributor.name.trim() === "") {
      errors.push(`Colaborador ${index + 1}: El nombre es requerido`);
    }

    if (!contributor.nickname || contributor.nickname.trim() === "") {
      errors.push(`Colaborador ${index + 1}: El nickname es requerido`);
    }

    if (
      !Array.isArray(contributor.hobbies) ||
      contributor.hobbies.length === 0
    ) {
      errors.push(`Colaborador ${index + 1}: Debe tener al menos un hobby`);
    }

    if (contributor.hobbies && contributor.hobbies.length > 4) {
      errors.push(`Colaborador ${index + 1}: Máximo 4 hobbies permitidos`);
    }

    if (
      contributor.linkedin &&
      !contributor.linkedin.includes("linkedin.com")
    ) {
      errors.push(`Colaborador ${index + 1}: URL de LinkedIn inválida`);
    }
  });

  if (errors.length > 0) {
    console.warn("Errores en datos de colaboradores:", errors);
  }

  return errors.length === 0;
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Validar datos
  validateContributors();

  // Renderizar colaboradores
  renderContributors();

  // Actualizar estadísticas
  updateStats();

  // Configurar scroll suave
  smoothScroll();

  // Agregar animaciones de scroll
  setTimeout(addScrollAnimations, 500);
});

// Exportar funciones para testing (si es necesario)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    contributors,
    getInitials,
    getColorFromName,
    validateContributors,
  };
}
