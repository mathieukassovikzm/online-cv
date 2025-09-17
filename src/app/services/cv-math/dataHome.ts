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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Photographe de famille",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Photographe de famille",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Photographe de famille",
      descriptions: [
        "orem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus"
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
