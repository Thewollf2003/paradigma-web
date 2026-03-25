# 📚 Revista Paradigma - UNESR

> **Plataforma web educativa inspirada en el pensamiento de Simón Rodríguez**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg)](https://tailwindcss.com/)

---

## 🎯 Descripción del Proyecto

**Paradigma** es una revista digital desarrollada para la **Universidad Nacional Experimental Simón Rodríguez (UNESR)**. La plataforma está diseñada para ser un espacio de difusión académica, innovación educativa y pensamiento crítico, inspirado en las ideas pedagógicas de Simón Rodríguez.

### ✨ Características Principales

- 🏠 **Página de Inicio**: Presentación de la revista con artículos y actividades destacadas
- 📖 **Biblioteca**: Repositorio de artículos académicos con sistema de autenticación
- 📅 **Calendario**: Visualización interactiva de eventos y actividades
- 🎪 **Actividades**: Sección dedicada a las actividades del departamento EDCII
- 👥 **Equipo**: Directorio del equipo de trabajo (profesores y estudiantes)

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Node.js | 18+ | Runtime de JavaScript |
| Express.js | 4.x | Framework web |
| Tailwind CSS | 3.x | Framework de estilos |
| EJS | 3.x | Motor de plantillas |
| JavaScript | ES6+ | Lenguaje de programación |

---

## 📦 Instalación

### Requisitos Previos

- **Node.js** versión 18 o superior
- **npm** o **yarn** como gestor de paquetes

### Pasos de Instalación

1. **Clonar o navegar al directorio del proyecto**
   ```bash
   cd C:\Users\Usuario\Documents\Proyectos\paradigma
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir el navegador**
   ```
   http://localhost:3000
   ```

---

## 📁 Estructura del Proyecto

```
paradigma/
├── src/
│   ├── server.js           # Punto de entrada principal
│   ├── routes/             # Rutas de la aplicación
│   │   ├── index.js        # Ruta principal
│   │   ├── library.js      # Biblioteca
│   │   ├── activities.js   # Actividades
│   │   ├── calendar.js     # Calendario
│   │   ├── team.js         # Equipo
│   │   └── auth.js         # Autenticación
│   ├── views/              # Plantillas EJS
│   │   ├── layout.ejs      # Layout principal
│   │   ├── index.ejs       # Página de inicio
│   │   ├── 404.ejs         # Página de error
│   │   ├── library/        # Vistas de biblioteca
│   │   ├── activities/     # Vistas de actividades
│   │   ├── calendar/       # Vistas de calendario
│   │   ├── team/           # Vistas de equipo
│   │   └── auth/           # Vistas de autenticación
│   ├── data/               # Datos de ejemplo
│   │   └── data.js
│   ├── middleware/         # Middleware personalizado
│   │   └── auth.js
│   └── public/             # Archivos estáticos
│       ├── css/
│       ├── js/
│       │   └── main.js
│       └── images/
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
├── package.json
└── README.md
```

---

## 🎨 Diseño y Estilo

### Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Azul Primario | `#2563eb` | Elementos principales |
| Azul Oscuro | `#1e40af` | Header, Footer |
| Rojo Acento | `#dc2626` | Botones, destacados |
| Blanco | `#ffffff` | Fondos |

### Tipografía

- **Principal**: Inter (sans-serif)
- **Contenido**: Merriweather (serif)

---

## 🔐 Autenticación

El sistema incluye autenticación básica para la gestión de contenido en la biblioteca.

### Credenciales de Prueba

| Usuario | Contraseña | Rol |
|---------|------------|-----|
| `admin` | `admin123` | Administrador |
| `profesor` | `prof123` | Editor |

### Funcionalidades por Rol

- **Público**: Ver artículos y actividades
- **Autenticado**: Subir artículos, gestionar contenido
- **Admin**: Todas las funcionalidades

---

## 🛠️ Comandos Disponibles

```bash
# Iniciar servidor de producción
npm start

# Iniciar servidor de desarrollo con auto-reload
npm run dev

# Compilar CSS con Tailwind
npm run build:css

# Compilar CSS con watch mode
npm run watch:css
```

---

## 📱 Diseño Responsivo

El sitio está diseñado con enfoque **mobile-first**, asegurando una experiencia óptima en:

- 📱 Dispositivos móviles
- 📱 Tablets
- 💻 Desktop

---

## 🎓 Enfoque Pedagógico

La plataforma sigue los principios de **Simón Rodríguez**:

1. **Innovación**: "Inventamos o Erramos"
2. **Pensamiento Crítico**: Fomento del análisis profundo
3. **Creatividad**: Búsqueda de soluciones propias
4. **Educación Liberadora**: Conocimiento accesible para todos

---

## 🌐 Rutas del Sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/biblioteca` | Repositorio de artículos |
| `/biblioteca/articulo/:id` | Detalle de artículo |
| `/biblioteca/subir` | Subir artículo (requiere login) |
| `/actividades` | Listado de actividades |
| `/actividades/:id` | Detalle de actividad |
| `/calendario` | Calendario interactivo |
| `/equipo` | Directorio del equipo |
| `/auth/login` | Inicio de sesión |
| `/auth/registro` | Registro de usuario |

---

## 🔧 Configuración

### Variables de Entorno (Opcional)

```env
PORT=3000
NODE_ENV=development
```

---

## 📝 Próximas Mejoras

- [ ] Base de datos real (MongoDB/PostgreSQL)
- [ ] Sistema de comentarios en artículos
- [ ] Búsqueda avanzada
- [ ] Exportación de artículos a PDF
- [ ] Panel de administración
- [ ] API REST completa
- [ ] Tests automatizados

---

## 👨‍💻 Equipo de Desarrollo

Desarrollado para la **UNESR** - Departamento **EDCII**

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto

- **Email**: paradigma@unesr.edu.ve
- **Ubicación**: Caracas, Venezuela

---

> *"Inventamos o Erramos"* — **Simón Rodríguez**

---

Hecho con ❤️ para la educación venezolana
