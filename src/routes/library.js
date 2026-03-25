/**
 * Rutas de la Biblioteca - Área restringida
 */

const express = require('express');
const router = express.Router();
const { articles } = require('../data/data');

// Middleware de autenticación simple
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  res.redirect('/auth/login');
}

// Listado de artículos (público)
router.get('/', (req, res) => {
  res.render('library/index', {
    title: 'Biblioteca - Paradigma',
    articles: articles,
    user: req.session.user || null
  });
});

// Ver artículo detallado
router.get('/articulo/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).render('404', {
      title: 'Artículo no encontrado',
      message: 'El artículo solicitado no existe'
    });
  }
  res.render('library/article', {
    title: article.title,
    article: article
  });
});

// Subir artículo (requiere autenticación)
router.get('/subir', isAuthenticated, (req, res) => {
  res.render('library/upload', {
    title: 'Subir Artículo - Paradigma',
    user: req.session.user
  });
});

router.post('/subir', isAuthenticated, (req, res) => {
  // En producción, aquí se guardaría en la base de datos
  console.log('Nuevo artículo recibido:', req.body);
  res.redirect('/biblioteca');
});

// Gestionar contenido (requiere autenticación)
router.get('/gestionar', isAuthenticated, (req, res) => {
  res.render('library/manage', {
    title: 'Gestionar Contenido - Paradigma',
    articles: articles,
    user: req.session.user
  });
});

module.exports = router;
