/**
 * Rutas del Equipo de Trabajo
 */

const express = require('express');
const router = express.Router();
const { teamMembers } = require('../data/data');

// Listado del equipo
router.get('/', (req, res) => {
  const role = req.query.role;
  let filteredTeam = teamMembers;
  
  if (role) {
    filteredTeam = teamMembers.filter(m => m.role.includes(role));
  }
  
  res.render('team/index', {
    title: 'Equipo de Trabajo - Paradigma',
    members: filteredTeam,
    currentRole: role || null
  });
});

// Detalle de miembro
router.get('/:id', (req, res) => {
  const member = teamMembers.find(m => m.id === parseInt(req.params.id));
  if (!member) {
    return res.status(404).render('404', {
      title: 'Miembro no encontrado',
      message: 'El miembro del equipo no existe'
    });
  }
  res.render('team/detail', {
    title: member.name,
    member: member
  });
});

module.exports = router;
