module.exports = {
  siteTitle: 'Lucero Sovero | Data Analyst | Website',
  siteDescription:
    'Lucero es Analista de Datos, apasionada de la analítica orientada a la resolución de problemas empresariales',
  siteKeywords:
    'Lucero Emperatriz, Lucero Sovero, Lu-Emperatriz, data analyst portfolio, portafolio analista de datos',
  siteUrl: 'https://.github.io/',
  siteLanguage: 'es_SP',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Lucero Emperatriz',
  location: 'Perú',
  email: 'e.lucero2000@gmail.com',
  github: 'https://github.com/Lu-Emperatriz',
  // twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      : 'https://github.com/Lu-Emperatriz',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lucero-sovero/',
    },
    // {
    //   name: 'Medium',
    //   url: 'https://medium.com/@e.lucero2000',
    // },
    // {
    //   name: 'Goodreads',
    //   url: 'https://www.instagram.com/chandrikadeb7',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/chandrikadeb7',
    // },
  ],

  navLinks: [
    {
      name: 'Sobre mí',
      url: '/#about',
    },
    // {
    //   name: 'Experiencia',
    //   url: '/#jobs',
    // },

    {
      name: 'Proyectos',
      url: '/#projects',
    },
    {
      name: 'Contacto',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
