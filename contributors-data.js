// ============================================================================
// 📋 ARCHIVO DE DATOS DE COLABORADORES
// ============================================================================
//
// 🎯 INSTRUCCIONES PARA CONTRIBUIR:
// 1. Copia el template de abajo
// 2. Reemplaza los valores con tu información
// 3. Agrega tu objeto al array 'contributors'
// 4. Haz commit y pull request
//
// ⚠️  IMPORTANTE: Solo modifica el array 'contributors', no toques el resto
// ============================================================================

const contributors = [
  {
    name: "David",
    nickname: "Dav082004",
    github: "https://github.com/Dav082004",
    linkedin: "https://www.linkedin.com/in/davidcontreraspalacios", // Opcional
    image: "https://github.com/Dav082004.png", // Opcional - URL de imagen o usar avatar de GitHub
    description:
      "Apasionado por la tecnología y la enseñanza. Me encanta crear proyectos que ayuden a otros a aprender.",
    hobbies: ["Programación", "Open Source", "Github", "Gaming"],
  },

  // Ahora es tu turno de agregar tu información siguiendo el template de abajo 👇(quita los /* */ de comentario)
  {
    name: "Octocat", 
    nickname: "gat1t0-ola", // ✅ Requerido
    github: "https://github.com/gat1t0-ola", // ✅ Requerido
    image: "https://github.com/gat1t0-ola.png", // ⭕ Opcional (se usa tu avatar de GitHub automáticamente o puedes poner una URL de imagen personalizada)
    description: "Soy un gato", // ✅ Requerido (máximo 150 caracteres)
    hobbies: ["Programar"], // ✅ Requerido (máximo 4 hobbies)
  },
];

// ⚠️ NO MODIFIQUES NADA DE AQUÍ HACIA ABAJO ⚠️
// Esta línea hace que los datos estén disponibles para el resto de la aplicación
if (typeof module !== "undefined" && module.exports) {
  module.exports = { contributors };
}
