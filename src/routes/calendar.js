/**
 * Rutas del Calendario
 */

const express = require('express');
const router = express.Router();
const { calendarEvents } = require('../data/data');

// Vista del calendario
router.get('/', (req, res) => {
  res.render('calendar/index', {
    title: 'Calendario - Paradigma',
    events: calendarEvents
  });
});

// API: Obtener eventos
router.get('/api/eventos', (req, res) => {
  const { month, year } = req.query;
  let filteredEvents = calendarEvents;
  
  if (month && year) {
    filteredEvents = calendarEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === parseInt(month) - 1 && 
             eventDate.getFullYear() === parseInt(year);
    });
  }
  
  res.json(filteredEvents);
});

// Agregar evento (requiere autenticación en producción)
router.post('/eventos', (req, res) => {
  console.log('Nuevo evento:', req.body);
  res.json({ success: true, message: 'Evento agregado' });
});

module.exports = router;
