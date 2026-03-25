/**
 * Rutas principales - Página de Inicio
 */

const express = require('express');
const router = express.Router();
const { articles, activities } = require('../data/data');

// Página principal
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio - Revista Paradigma',
    featuredArticles: articles.slice(0, 3),
    upcomingActivities: activities.slice(0, 2)
  });
});

// Página sobre nosotros
router.get('/nosotros', (req, res) => {
  res.render('about', {
    title: 'Sobre Nosotros - Paradigma'
  });
});

module.exports = router;
