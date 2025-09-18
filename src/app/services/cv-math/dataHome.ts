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
  text: '',
  email: 'seb.pinet35@gmail.com ',
  phone: '+33 6 16 10 73 42',
  photo: './assets/recommendations/Sebastien.jpeg',
};

export const patrickLeprince = <IRecommendationModel>{
  nom: 'Patrick Lepince',
  enterprise: 'Véonum',
  text: '',
  email: 'seb.pinet35@gmail.com ',
  phone: '+33 6 16 10 73 42',
};

export const michelPelgrin = <IRecommendationModel>{
  nom: 'Michel Pelgrin',
  enterprise: 'Freelance',
  text: '',
  email: 'seb.pinet35@gmail.com ',
  phone: '+33 6 16 10 73 42',
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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
        "Je propose des services de photographie, notamment pour des photos de famille, de grossesse et de naissance.",
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Faire-part",
      descriptions: [
        "Passionné de création graphique, je réalise des faire-part de mariage et de naissance sur mesure.",
      ]
    },
  ],
  lstRecommendations: [
    <IRecommendationModel>{
      ...sebastienPinet,
      text: 'Au top',
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
      title: "Développement backend",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Développement front",
      descriptions: [
        "Front-end developer, I'm able to work on both new and existing projects, handling feature development and bug fixes in Angular and Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Développement fullstack",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Photographe de mariage",
      descriptions: [
        "From the religious ceremony at the church to the wedding reception and evening celebration, I cover every highlight of your special day."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Photographe de famille",
      descriptions: [
        "I offer photography services, particularly for family, maternity and newborn photos."
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Faire-part",
      descriptions: [
        "Passionate about graphic design, I create custom wedding and birth announcements.",
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
      title: "Développement backend",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Développement front",
      descriptions: [
        "Desarrollador front-end, soy capaz de trabajar tanto en proyectos nuevos como en existentes, realizando evoluciones y correcciones de errores en Angular y Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Développement fullstack",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Photographe de mariage",
      descriptions: [
        "Desde la ceremonia religiosa en la iglesia hasta el banquete de bodas y la fiesta nocturna, capturo cada momento especial de su gran día."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Photographe de famille",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Faire-part",
      descriptions: [
        "Apasionado por el diseño gráfico, realizo invitaciones de boda y de nacimiento a medida.",
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
