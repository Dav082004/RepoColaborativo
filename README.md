# 🚀 Repo Colaborativo - ¡Únete a la Comunidad!

![Contributors](https://img.shields.io/badge/contributors-1-blue)
![GitHub Pages](https://img.shields.io/badge/github%20pages-deployed-success)
![Last Updated](https://img.shields.io/badge/last%20updated-2025--08--01-green)

Una página web colaborativa donde desarrolladores de todo el mundo pueden contribuir con su información personal y aprender sobre colaboración en proyectos open source.

## 🌟 Características

- ✨ **Página web animada y moderna** con efectos visuales atractivos
- 🤖 **Sistema automatizado** de validación y despliegue con GitHub Actions
- 🔄 **Auto-merge** de contribuciones válidas
- 📊 **Estadísticas en tiempo real** de colaboradores
- 🎨 **Diseño responsive** que se adapta a cualquier dispositivo
- 🚀 **Despliegue automático** a GitHub Pages

## 🌐 Ver la Página Web

👉 **[Visita la página web aquí](https://dav082004.github.io/RepoColaborativo)**

## 🤝 ¿Cómo Contribuir?

### Paso 1: Fork del Repositorio

```bash
# 1. Haz fork de este repositorio en GitHub (botón "Fork")
# 2. Clona tu fork
git clone https://github.com/TU_USUARIO/RepoColaborativo.git
cd RepoColaborativo
```

### Paso 2: Agrega tu Información

Edita el archivo `contributors.js` y agrega tu objeto al final del array `contributors`:

```javascript
{
    name: "Tu Nombre Completo",
    nickname: "tu_github_username",
    github: "https://github.com/tu_username", // Requerido
    linkedin: "https://linkedin.com/in/tu-perfil", // Opcional
    description: "Una breve descripción sobre ti y tu especialidad", // Requerido
    image: "https://tu-url-de-imagen.com/imagen.jpg", // Opcional
    hobbies: ["Hobby1", "Hobby2", "Hobby3"] // Máximo 4 hobbies
},
```

### 📸 Sobre las Imágenes de Perfil

- **🤖 Automático**: Si no proporcionas una imagen, se usará automáticamente tu avatar de GitHub
- **🔄 Respaldo**: Si tu imagen personalizada falla, se mostrará tu avatar de GitHub como respaldo
- **🎨 Iniciales**: Si no tienes GitHub, se mostrarán tus iniciales con un color único
- **✅ Formatos soportados**: JPG, PNG, WebP
- **📏 Tamaño recomendado**: 200x200px o mayor

**Ejemplo:**

```javascript
{
    name: "Ana María González",
    nickname: "anagonzalez",
    github: "https://github.com/anagonzalez",
    linkedin: "https://linkedin.com/in/ana-gonzalez-dev",
    description: "Estudiante de Ingeniería de Sistemas especializada en desarrollo web",
    image: "https://avatars.githubusercontent.com/u/12345678?v=4", // Opcional
    hobbies: ["Programación", "Lectura", "Yoga", "Fotografía"]
},
```

### Paso 3: Envía tu Pull Request

```bash
# Crea una nueva rama
git checkout -b feat/add-tu-nickname

# Agrega los cambios
git add contributors.js

# Haz commit con el formato correcto
git commit -m "feat: add [tu_nickname] to contributors"

# Envía los cambios
git push origin feat/add-tu-nickname
```

Luego crea un Pull Request en GitHub con el título: `feat: add [tu_nickname] to contributors`

## 🤖 Sistema Automatizado

### ✅ Validaciones Automáticas

Cuando envíes tu PR, el sistema automáticamente validará:

- ✅ Sintaxis JavaScript correcta
- ✅ Formato de datos válido
- ✅ Campos requeridos completos
- ✅ Máximo 4 hobbies
- ✅ URL de LinkedIn válida (si se proporciona)
- ✅ No duplicación de nicknames

### 🔄 Auto-merge

Si todas las validaciones pasan:

1. **Comentario automático** de bienvenida
2. **Merge automático** del PR
3. **Despliegue automático** de la página web actualizada
4. **Notificación** de éxito

### 🚨 Si hay errores

- Recibirás comentarios específicos sobre qué corregir
- El PR no será mergeado hasta que se corrijan los errores
- Puedes hacer commits adicionales para corregir

## 📋 Reglas y Guidelines

### ✅ Permitido

- Modificar únicamente `contributors.js`
- Agregar exactamente **1 colaborador por PR**
- Usar tu propio GitHub username como nickname
- Incluir información real y profesional

### ❌ No Permitido

- Modificar otros archivos (HTML, CSS, JS principal)
- Agregar múltiples colaboradores en un solo PR
- Usar información falsa o inapropiada
- Duplicar nicknames existentes

## 🛠️ Desarrollo Local

Para probar la página localmente:

```bash
# Clona el repositorio
git clone https://github.com/Dav082004/RepoColaborativo.git
cd RepoColaborativo

# Abre index.html en tu navegador
# O usa un servidor local como Live Server en VS Code
```

## 📁 Estructura del Proyecto

```
RepoColaborativo/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidades interactivas
├── contributors.js     # 📝 Datos de colaboradores (AQUÍ EDITAS)
├── .github/workflows/  # GitHub Actions
│   ├── deploy.yml      # Despliegue y validaciones
│   └── auto-merge.yml  # Auto-merge de PRs válidos
└── README.md           # Este archivo
```

## 🎯 Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Animaciones:** CSS Animations, Transforms
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages
- **Validación:** Node.js scripts

## 🌟 Características Especiales

### 🎨 Efectos Visuales

- Gradientes animados
- Partículas flotantes
- Efectos de hover en 3D
- Animaciones de entrada suaves
- Contador animado de estadísticas

### 🎮 Easter Eggs

- Código Konami para efectos especiales
- Mensajes de bienvenida animados
- Efectos de lluvia de emojis

### 📱 Responsive Design

- Diseño adaptable para móviles
- Navegación optimizada
- Tipografía escalable

## 📊 Estadísticas del Proyecto

- 👥 **Colaboradores:** Se actualiza automáticamente
- 🌍 **Países representados:** Estimación basada en colaboradores
- 📈 **Contribuciones totales:** Contador dinámico

## 🤝 Comunidad y Soporte

### 💬 ¿Necesitas ayuda?

- 🐛 [Reportar un bug](https://github.com/Dav082004/RepoColaborativo/issues/new?labels=bug)
- 💡 [Sugerir una mejora](https://github.com/Dav082004/RepoColaborativo/issues/new?labels=enhancement)
- ❓ [Hacer una pregunta](https://github.com/Dav082004/RepoColaborativo/discussions)

### 🌟 Contribuciones Avanzadas

¿Quieres contribuir con código? También aceptamos:

- 🐛 Corrección de bugs
- ✨ Nuevas características
- 📖 Mejoras en documentación
- 🎨 Mejoras de diseño

Para estas contribuciones, abre un issue primero para discutir los cambios.

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🎉 ¡Únete Ahora!

¿Estás listo para hacer tu primera contribución a un proyecto colaborativo?

1. 🔀 **Fork** este repositorio
2. ✏️ **Agrega** tu información a `contributors.js`
3. 📤 **Envía** tu Pull Request
4. 🎊 **¡Celebra** tu primera contribución!

**¡Te esperamos en la comunidad!** 🚀

---

<div align="center">

**¿Te gusta el proyecto? ¡Dale una ⭐ al repositorio!**

Hecho con ❤️ por la comunidad de desarrolladores

</div>
