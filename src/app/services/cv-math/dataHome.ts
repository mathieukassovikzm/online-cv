import {
  IEnterpriseModel,
  IHomeModel,
  IRecommendationModel,
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
  lstRecommendations: [
    {
      ...sebastienPinet,
      text: 'Au top',
    },
    {
      ...michelPelgrin,
      text: 'Au top',
    },
    {
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
  lstRecommendations: [
    {
      ...sebastienPinet,
      text: 'Very good',
    },
    {
      ...michelPelgrin,
      text: 'Au top',
    },
    {
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
  lstRecommendations: [
    {
      ...sebastienPinet,
      text: 'Muy Bueno',
    },
    {
      ...michelPelgrin,
      text: 'Au top',
    },
    {
      ...patrickLeprince,
      text: 'Au top',
    }
  ],
  lstLogos: lstLogosEntreprises,
};
