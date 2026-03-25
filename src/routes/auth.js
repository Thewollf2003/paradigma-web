/**
 * Rutas de Autenticación
 */

const express = require('express');
const router = express.Router();
const { users } = require('../data/data');

// Login
router.get('/login', (req, res) => {
  res.render('auth/login', {
    title: 'Iniciar Sesión - Paradigma',
    error: null
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // Crear sesión
    req.session.user = {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role
    };
    res.redirect('/biblioteca');
  } else {
    res.render('auth/login', {
      title: 'Iniciar Sesión - Paradigma',
      error: 'Usuario o contraseña incorrectos'
    });
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});

// Registro (en producción sería más completo)
router.get('/registro', (req, res) => {
  res.render('auth/register', {
    title: 'Registrarse - Paradigma',
    error: null
  });
});

router.post('/registro', (req, res) => {
  console.log('Nuevo registro:', req.body);
  res.redirect('/auth/login');
});

module.exports = router;
