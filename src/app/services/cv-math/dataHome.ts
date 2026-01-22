import {
  IEnterpriseModel,
  IHomeModel,
  IRecommendationModel,
  IServiceModel,
} from 'src/app/models/home';

export const lstLogosEntreprises = <IEnterpriseModel[]>[
  { name: 'Atos', logo: './assets/logos/Atos.png', alt: 'Logo Atos' },
  {
    name: 'Bouygues Telecom',
    logo: './assets/logos/Bouygues.png',
    alt: 'Logo Bouygues Telecom',
  },
  { name: 'RRF', logo: './assets/logos/RRF.png', alt: 'Logo RRF' },
  { name: 'Solina', logo: './assets/logos/Solina.png', alt: 'Logo Solina' },
  {
    name: 'Sopra Steria',
    logo: './assets/logos/Sopra.png',
    alt: 'Logo Sopra Steria',
  },
  { name: 'Veonum', logo: './assets/logos/Veonum.png', alt: 'Logo Veonum' },
];

// ------------ Services ------------ 
export const devBackend = <IServiceModel>{
  title: "",
  descriptions: []
};

export const devFrontend = <IServiceModel>{
  title: "",
  descriptions: []
};

export const devFullStack = <IServiceModel>{
  title: "",
  descriptions: []
};

export const weddingPhotography = <IServiceModel>{
  title: "",
  descriptions: []
};

export const famillyPhotograph = <IServiceModel>{
  title: "",
  descriptions: []
};

export const eventAnnouncement = <IServiceModel>{
  title: "",
  descriptions: []
};

// ------------ Recommendations ------------ 
export const sebastienPinet = <IRecommendationModel>{
  nom: 'Sebastien Pinet',
  enterprise: 'Véonum',
  email: 'seb.pinet35@gmail.com',
  phone: '+33 6 16 10 73 42',
  photo: './assets/recommendations/Sebastien.jpeg',
};

export const patrickLeprince = <IRecommendationModel>{
  nom: 'Patrick Lepince',
  enterprise: 'Véonum',
  email: 'patrick.leprince@veonum.com',
  phone: '+33 7 67 70 66 53',
  photo: './assets/recommendations/Patrick.jpeg',
};

export const michelPelgrin = <IRecommendationModel>{
  nom: 'Michel Pelgrin',
  enterprise: 'Freelance',
  email: 'copernicus_13@hotmail.com',
};

export const homeFr: IHomeModel = {
  lstRecap: [
    { libelle: "Année d'expérience", value: 10 },
    { libelle: 'Happy Customers', value: 10 },
    { libelle: 'Completed Projects', value: 10 },
    { libelle: 'Honors and Awards', value: 10 },
  ],
  lstServices: [
    <IServiceModel>{
      ...devBackend,
      title: "Développement backend",
      descriptions: [
        "Développeur backend, je conçois et maintiens des API robustes, performantes et sécurisées. J'interviens sur la conception d'architectures, la gestion de bases de données et l'optimisation des performances."
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Développement front",
      descriptions: [
        "Développeur front-end, je suis capable d'intervenir sur un projet vierge ou existant, pour des évolutions ou des corrections de bugs en Angular et Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Développement fullstack",
      descriptions: [
        "Développeur fullstack, je prends en charge un projet de bout en bout, du backend au frontend, en assurant la cohérence technique, la performance et la qualité de l'FFOexpérience utilisateur."
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Photographe de mariage",
      descriptions: [
        "De la cérémonie religieuse à l'église jusqu'à la fête de noces et la soirée, je capture chaque moment marquant de votre mariage."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Photographe de famille",
      descriptions: [
        "Je propose des services de photographie, notamment pour des photos de famille, de grossesse et de naissance."
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Faire-part",
      descriptions: [
        "Passionné de création graphique, je réalise des faire-part de mariage et de naissance sur mesure."
      ]
    },
  ],
  lstRecommendations: [
    <IRecommendationModel>{
      ...sebastienPinet,
      text: "J'ai eu la chance de travailler avec Mathieu quelques années et suivre ses autres aventures professionnelles par la suite. En complément d'une solide formation au sein d'une très bonne école d'ingénieur Rennaise, j'ai apprécié tant ses qualités humaines que ses compétences techniques. Enthousiaste, flexible, disponible pour accompagner les autres, impliqué dans son travail, le sens des responsabilités, brillant techniquement, ouvert d'esprit, ... en résumé le collaborateur que l'on souhaite tous embarquer dans son équipe.",
    },
    <IRecommendationModel>{
      ...michelPelgrin,
      text: 'Au top',
    },
    <IRecommendationModel>{
      ...patrickLeprince,
      text: 'Au top',
    }
  ],
  lstLogos: lstLogosEntreprises,
};

export const homeEn: IHomeModel = {
  lstRecap: [
    { libelle: 'Years Experience', value: 10 },
    { libelle: 'Happy Customers', value: 10 },
    { libelle: 'Completed Projects', value: 10 },
    { libelle: 'Honors and Awards', value: 10 },
  ],
  lstServices: [
    <IServiceModel>{
      ...devBackend,
      title: "Backend development",
      descriptions: [
        "As a backend developer, I design and maintain robust, high-performance, and secure APIs. I work on architecture design, database management, and performance optimization."
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Frontend development",
      descriptions: [
        "As a frontend developer, I can work on new or existing projects, handling feature development or bug fixes using Angular and Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Fullstack development",
      descriptions: [
        "As a fullstack developer, I manage projects end to end, from backend to frontend, ensuring technical consistency, performance, and a high-quality user experience."
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Wedding photographer",
      descriptions: [
        "From the religious ceremony at the church to the wedding reception and evening celebration, I capture every meaningful moment of your wedding day."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Family photographer",
      descriptions: [
        "I offer photography services for family portraits, maternity sessions, and newborn photography."
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Invitations",
      descriptions: [
        "Passionate about graphic design, I create custom-made wedding and birth announcements."
      ]
    },
  ],
  lstRecommendations: [
    <IRecommendationModel>{
      ...sebastienPinet,
      text: 'Very good',
    },
    <IRecommendationModel>{
      ...michelPelgrin,
      text: 'Au top',
    },
    <IRecommendationModel>{
      ...patrickLeprince,
      text: 'Au top',
    }
  ],
  lstLogos: lstLogosEntreprises,
};

export const homeEs: IHomeModel = {
  lstRecap: [
    { libelle: 'Anos de experiencias', value: 10 },
    { libelle: 'Happy Customers', value: 10 },
    { libelle: 'Completed Projects', value: 10 },
    { libelle: 'Honors and Awards', value: 10 },
  ],
  lstServices: [
    <IServiceModel>{
      ...devBackend,
      title: "Desarrollo backend",
      descriptions: [
        "Como desarrollador backend, diseño y mantengo APIs sólidas, seguras y de alto rendimiento. Trabajo en el diseño de arquitecturas, la gestión de bases de datos y la optimización del rendimiento."
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Desarrollo frontend",
      descriptions: [
        "Como desarrollador frontend, puedo intervenir en proyectos nuevos o existentes, realizando evoluciones o correcciones de errores con Angular y Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Desarrollo fullstack",
      descriptions: [
        "Como desarrollador fullstack, me encargo de proyectos de principio a fin, desde el backend hasta el frontend, garantizando coherencia técnica, rendimiento y una excelente experiencia de usuario."
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Fotógrafo de bodas",
      descriptions: [
        "Desde la ceremonia religiosa en la iglesia hasta la celebración y la fiesta, capturo cada momento especial de su boda."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Fotógrafo familiar",
      descriptions: [
        "Ofrezco servicios de fotografía, incluyendo sesiones familiares, de embarazo y de recién nacidos."
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Invitaciones",
      descriptions: [
        "Apasionado por el diseño gráfico, realizo invitaciones personalizadas para bodas y nacimientos."
      ]
    },
  ],
  lstRecommendations: [
    <IRecommendationModel>{
      ...sebastienPinet,
      text: 'Muy Bueno',
    },
    <IRecommendationModel>{
      ...michelPelgrin,
      text: 'Au top',
    },
    <IRecommendationModel>{
      ...patrickLeprince,
      text: 'Au top',
    }
  ],
  lstLogos: lstLogosEntreprises,
};
