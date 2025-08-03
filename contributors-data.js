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
  {
    name: "Octocat", 
    nickname: "gat1t0-ola", // ✅ Requerido
    github: "https://github.com/gat1t0-ola", // ✅ Requerido
    image: "https://github.com/gat1t0-ola.png", // ⭕ Opcional (se usa tu avatar de GitHub automáticamente o puedes poner una URL de imagen personalizada)
    description: "Soy un gato con 8 tentáculos", // ✅ Requerido (máximo 150 caracteres)
    hobbies: ["Programar"], // ✅ Requerido (máximo 4 hobbies)
  },
  {
    name: "Mathias", 
    nickname: "MathiasAugustto ", // ✅ Requerido
    github: "https://github.com/MathiasAugustto", // ✅ Requerido
    image: "https://github.com/MathiasAugustto.png", // ⭕ Opcional (se usa tu avatar de GitHub automáticamente o puedes poner una URL de imagen personalizada)
    description: "Estudiante en UPC", // ✅ Requerido (máximo 150 caracteres)
    hobbies: ["Programar","Gaming","Git"], // ✅ Requerido (máximo 4 hobbies)
  },

  // Colaboranndo Lennin
  {
    name: "Lennin Temoche", 
    nickname: "Lennin Temoche", // ✅ Requerido
    github: "https://github.com/LenninTemoche", // ✅ Requerido
    //linkedin: "https://linkedin.com/in/tu-perfil", // ⭕ Opcional
    image: "https://github.com/LenninTemoche.png", // ⭕ Opcional (se usa tu avatar de GitHub automáticamente o puedes poner una URL de imagen personalizada)
    description:
      "Apasionado por la tecnología y la enseñanza. Me interesa crear y colaborar con proyectos que ayuden a otros a aprender.",
    hobbies: ["Programación", "Open Source", "Github", "DS"],
  },

  {
    name: "Gastón Peló", 
    nickname: "gpelo-data", // ✅ Requerido
    github: "https://github.com/gpelo-data", // ✅ Requerido
    linkedin: "https://www.linkedin.com/in/gpelo-data/", // ⭕ Opcional
    image: "https://github.com/gpelo-data.png", // ⭕ Opcional (se usa tu avatar de GitHub automáticamente o puedes poner una URL de imagen personalizada)
    description: "Soy Gastón Peló, Analista de Datos Jr.", // ✅ Requerido (máximo 150 caracteres)
    hobbies: ["Programación", "Visualización de Datos", "Modelado 3D"], // ✅ Requerido (máximo 4 hobbies)
  },
  {
    name: "Kenneth Torres",
    nickname: "KennethTorres", // ✅ Requerido
    github: "https://github.com/KennethTorres", // ✅ Requerido
    linkedin: "https://www.linkedin.com/in/kennethtorresbrizuela/", // ⭕ Opcional
    //image: "",
    description: "Desarrollador de Software | Apasionado por la tecnología, el desarrollo web y la resolución de problemas, enfocado en el aprendizaje continuo y la creación de soluciones funcionales.",
    hobbies: ["Programación", "Desarrollo Web", "Github", "Gaming"], // ✅ Requerido (máximo 4 hobbies)
  },
  {
    name: "David Chavarría",
    nickname: "davidch", // ✅ Requerido
    github: "https://github.com/Dave0097-hdz", // ✅ Requerido
    linkedin: "https://www.linkedin.com/in/david-hernandez-dev/", // ⭕ Opcional
    image: "https://github.com/Dave0097-hdz.png",
    description: "Soy un estudiante apasionado por la programación y la tecnología. Me encanta seguir aprendiendo de nuevas tecnologías y me gusta compartir mi conocimientos con otros.",
    hobbies: ["Developer", "Open Source", "Github", "Gaming"],
  }
];

// ⚠️ NO MODIFIQUES NADA DE AQUÍ HACIA ABAJO ⚠️
// Esta línea hace que los datos estén disponibles para el resto de la aplicación
if (typeof module !== "undefined" && module.exports) {
  module.exports = { contributors };
}
