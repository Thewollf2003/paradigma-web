/**
 * JavaScript principal para la Revista Paradigma
 * Maneja interactividad y funcionalidades del frontend
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Revista Paradigma - Cargada correctamente');
  
  // Inicializar todas las funcionalidades
  initSmoothScroll();
  initSearchFilter();
  initFormValidation();
  initAnimations();
});

/**
 * Smooth scroll para enlaces internos
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/**
 * Filtrado y búsqueda en listados
 */
function initSearchFilter() {
  const searchInput = document.querySelector('.search-input');
  const filterItems = document.querySelectorAll('.filter-item');
  
  if (searchInput && filterItems.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      filterItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
  }
}

/**
 * Validación de formularios
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        showNotification('Por favor completa los campos requeridos', 'error');
      }
      form.classList.add('was-validated');
    });
  });
}

/**
 * Animaciones al hacer scroll
 */
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Mostrar notificaciones
 */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white z-50 transform transition-all duration-300 translate-x-full ${
    type === 'error' ? 'bg-red-600' : 
    type === 'success' ? 'bg-green-600' : 'bg-blue-600'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animación de entrada
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto eliminar
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

/**
 * Manejo de menú móvil
 */
function toggleMobileMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

/**
 * Formatear fecha
 */
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

/**
 * Exportar funciones globales
 */
window.Paradigma = {
  toggleMobileMenu,
  showNotification,
  formatDate
};
