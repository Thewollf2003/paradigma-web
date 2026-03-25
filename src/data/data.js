/**
 * Datos de ejemplo para la aplicación
 * En producción, esto debería estar en una base de datos
 */

const articles = [
  {
    id: 1,
    title: 'El pensamiento educativo de Simón Rodríguez',
    author: 'Dr. María González',
    date: '2025-03-15',
    category: 'Filosofía Educativa',
    summary: 'Un análisis profundo del legado pedagógico del maestro de Bolívar.',
    content: 'Simón Rodríguez, nacido en Caracas en 1769, fue un filósofo y educador venezolano cuyo pensamiento revolucionario influyó profundamente en la educación latinoamericana...',
    image: '/images/articles/rodriguez.jpg'
  },
  {
    id: 2,
    title: 'Innovación educativa en la UNESR',
    author: 'Prof. Carlos Pérez',
    date: '2025-03-10',
    category: 'Innovación',
    summary: 'Experiencias exitosas de implementación de metodologías activas.',
    content: 'La Universidad Nacional Experimental Simón Rodríguez ha sido pionera en la implementación de metodologías educativas innovadoras...',
    image: '/images/articles/unesr.jpg'
  },
  {
    id: 3,
    title: 'El rol del docente en el siglo XXI',
    author: 'Dra. Ana Rodríguez',
    date: '2025-03-05',
    category: 'Pedagogía',
    summary: 'Reflexiones sobre la transformación del papel del educador.',
    content: 'En la era digital, el docente deja de ser un mero transmisor de conocimientos para convertirse en un facilitador del aprendizaje...',
    image: '/images/articles/docente.jpg'
  }
];

const activities = [
  {
    id: 1,
    title: 'Taller de Escritura Creativa',
    description: 'Espacio dedicado al desarrollo de habilidades narrativas y expresivas.',
    date: '2025-03-20',
    time: '10:00 AM',
    location: 'Aula Magna',
    image: '/images/activities/taller-escritura.jpg',
    category: 'Taller'
  },
  {
    id: 2,
    title: 'Conferencia: Educación y Tecnología',
    description: 'Panel de expertos sobre el impacto de la tecnología en la educación moderna.',
    date: '2025-03-25',
    time: '2:00 PM',
    location: 'Auditorio Principal',
    image: '/images/activities/conferencia.jpg',
    category: 'Conferencia'
  },
  {
    id: 3,
    title: 'Jornada de Lectura Comunitaria',
    description: 'Actividad de promoción de la lectura en espacios públicos.',
    date: '2025-04-01',
    time: '9:00 AM',
    location: 'Plaza Central',
    image: '/images/activities/lectura.jpg',
    category: 'Jornada'
  },
  {
    id: 4,
    title: 'Seminario: Pensamiento de Simón Rodríguez',
    description: 'Análisis profundo de las ideas pedagógicas del maestro.',
    date: '2025-04-10',
    time: '3:00 PM',
    location: 'Sala de Conferencias',
    image: '/images/activities/seminario.jpg',
    category: 'Seminario'
  }
];

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Roberto Martínez',
    role: 'Director del EDCII',
    bio: 'Doctor en Educación con más de 20 años de experiencia en gestión educativa.',
    image: '/images/team/director.jpg'
  },
  {
    id: 2,
    name: 'Dra. Carmen López',
    role: 'Coordinadora Académica',
    bio: 'Especialista en currículo y diseño instruccional.',
    image: '/images/team/coordinadora.jpg'
  },
  {
    id: 3,
    name: 'Prof. Luis Hernández',
    role: 'Profesor Investigador',
    bio: 'Investigador en tecnologías educativas y metodologías activas.',
    image: '/images/team/profesor1.jpg'
  },
  {
    id: 4,
    name: 'Lic. María Fernández',
    role: 'Profesora de Lengua',
    bio: 'Especialista en literatura latinoamericana y escritura creativa.',
    image: '/images/team/profesora1.jpg'
  },
  {
    id: 5,
    name: 'Juan Pérez',
    role: 'Estudiante Ayudante',
    bio: 'Estudiante de Educación, colaborador en proyectos de innovación.',
    image: '/images/team/estudiante1.jpg'
  },
  {
    id: 6,
    name: 'Ana García',
    role: 'Estudiante Ayudante',
    bio: 'Estudiante de Comunicación, responsable de la difusión digital.',
    image: '/images/team/estudiante2.jpg'
  }
];

const calendarEvents = [
  {
    id: 1,
    title: 'Entrega de Proyectos',
    date: '2025-03-28',
    type: 'academic',
    description: 'Fecha límite para entrega de proyectos finales'
  },
  {
    id: 2,
    title: 'Reunión de Coordinación',
    date: '2025-03-30',
    type: 'meeting',
    description: 'Reunión mensual del equipo EDCII'
  },
  {
    id: 3,
    title: 'Festival de Cultura',
    date: '2025-04-05',
    type: 'event',
    description: 'Celebración anual de la cultura universitaria'
  },
  {
    id: 4,
    title: 'Evaluación Docente',
    date: '2025-04-15',
    type: 'academic',
    description: 'Período de evaluaciones del semestre'
  },
  {
    id: 5,
    title: 'Taller de Innovación',
    date: '2025-04-20',
    type: 'workshop',
    description: 'Taller de herramientas digitales para docentes'
  }
];

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123', // En producción usar hash
    role: 'admin',
    name: 'Administrador'
  },
  {
    id: 2,
    username: 'profesor',
    password: 'prof123',
    role: 'editor',
    name: 'Profesor Usuario'
  }
];

module.exports = {
  articles,
  activities,
  teamMembers,
  calendarEvents,
  users
};
