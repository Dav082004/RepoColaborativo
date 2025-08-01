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
  /*{
    name: "Tu Nombre Completo", 
    nickname: "tu_github_username", // ✅ Requerido
    github: "https://github.com/tu_username", // ✅ Requerido
    linkedin: "https://linkedin.com/in/tu-perfil", // ⭕ Opcional
    image: "https://github.com/tu_username.png", // ⭕ Opcional (se usa tu avatar de GitHub automáticamente o puedes poner una URL de imagen personalizada)
    description: "Una breve descripción sobre ti", // ✅ Requerido (máximo 150 caracteres)
    hobbies: ["Hobby1", "Hobby2", "Hobby3", "Hobby4"], // ✅ Requerido (máximo 4 hobbies)
  },*/
];

// ⚠️ NO MODIFIQUES NADA DE AQUÍ HACIA ABAJO ⚠️
// Esta línea hace que los datos estén disponibles para el resto de la aplicación
if (typeof module !== "undefined" && module.exports) {
  module.exports = { contributors };
}
