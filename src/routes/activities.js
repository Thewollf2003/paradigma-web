/**
 * Rutas de Actividades - Nuestras Actividades
 */

const express = require('express');
const router = express.Router();
const { activities } = require('../data/data');

// Listado de actividades
router.get('/', (req, res) => {
  const category = req.query.category;
  let filteredActivities = activities;
  
  if (category) {
    filteredActivities = activities.filter(a => a.category === category);
  }
  
  res.render('activities/index', {
    title: 'Nuestras Actividades - Paradigma',
    activities: filteredActivities,
    currentCategory: category || null
  });
});

// Detalle de actividad
router.get('/:id', (req, res) => {
  const activity = activities.find(a => a.id === parseInt(req.params.id));
  if (!activity) {
    return res.status(404).render('404', {
      title: 'Actividad no encontrada',
      message: 'La actividad solicitada no existe'
    });
  }
  res.render('activities/detail', {
    title: activity.title,
    activity: activity
  });
});

module.exports = router;
