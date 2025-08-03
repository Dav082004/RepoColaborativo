// Script para la página Como Contribuir
document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
});

// Configuración del menú móvil
function setupMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const headerNav = document.getElementById("headerNav");
  const mobileOverlay = document.getElementById("mobileOverlay");

  if (!mobileMenuToggle || !headerNav || !mobileOverlay) {
    console.warn("Elementos del menú móvil no encontrados");
    return;
  }

  // Función para alternar el menú
  function toggleMobileMenu() {
    const isActive = headerNav.classList.contains("active");

    if (isActive) {
      // Cerrar menú
      headerNav.classList.remove("active");
      mobileOverlay.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      // Abrir menú
      headerNav.classList.add("active");
      mobileOverlay.classList.add("active");
      mobileMenuToggle.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevenir scroll del body
    }
  }

  // Event listeners
  mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  mobileOverlay.addEventListener("click", toggleMobileMenu);

  // Cerrar menú al hacer click en los enlaces
  const navLinks = headerNav.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (headerNav.classList.contains("active")) {
        toggleMobileMenu();
      }
    });
  });

  // Cerrar menú al redimensionar ventana si está abierto
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && headerNav.classList.contains("active")) {
      toggleMobileMenu();
    }
  });

  // Cerrar menú con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && headerNav.classList.contains("active")) {
      toggleMobileMenu();
    }
  });
}
