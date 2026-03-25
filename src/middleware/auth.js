/**
 * Middleware de autenticación
 * Verifica si el usuario está logueado
 */

function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  res.redirect('/auth/login');
}

function isAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  res.status(403).render('403', {
    title: 'Acceso Denegado',
    message: 'No tienes permisos para realizar esta acción'
  });
}

module.exports = {
  isAuthenticated,
  isAdmin
};
