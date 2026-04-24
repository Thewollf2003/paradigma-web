/**
 * Servidor principal de la aplicación Paradigma
 * Configura Express, middleware y rutas
 */

const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// Importar rutas
const indexRoutes = require('./routes/index');
const libraryRoutes = require('./routes/library');
const activitiesRoutes = require('./routes/activities');
const calendarRoutes = require('./routes/calendar');
const teamRoutes = require('./routes/team');
const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de sesiones
app.use(session({
  secret: 'paradigma-unesr-secret-key-2025',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}));

// Middleware para hacer la sesión accesible en todas las vistas
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Servir archivos estáticos
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/img', express.static(path.join(__dirname, '../img')));

// Configurar motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas principales
app.use('/', indexRoutes);
app.use('/biblioteca', libraryRoutes);
app.use('/actividades', activitiesRoutes);
app.use('/calendario', calendarRoutes);
app.use('/equipo', teamRoutes);
app.use('/auth', authRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Página no encontrada',
    message: 'La página que buscas no existe'
  });
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 ==============================================`);
  console.log(`   Servidor Paradigma corriendo en:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   ==============================================`);
  console.log(`   📚 Revista digital de la UNESR`);
  console.log(`   💡 Inspirada en Simón Rodríguez`);
  console.log(`   ==============================================\n`);
});

module.exports = app;
