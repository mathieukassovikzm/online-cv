import { IEnterpriseModel, IHomeModel } from 'src/app/models/home';

export const lstLogosEntreprises = <IEnterpriseModel[]>[
  {name: 'Atos', logo: './assets/logos/Atos.png',alt: 'Logo Atos'},
  {name: 'Bouygues Telecom', logo: './assets/logos/Bouygues.png',alt: 'Logo Bouygues Telecom'},
  {name: 'RRF', logo: './assets/logos/RRF.png',alt: 'Logo RRF'},
  {name: 'Solina', logo: './assets/logos/Solina.png',alt: 'Logo Solina'},
  {name: 'Sopra Steria', logo: './assets/logos/Sopra.png',alt: 'Logo Sopra Steria'},
  {name: 'Veonum', logo: './assets/logos/Veonum.png',alt: 'Logo Veonum'},
];

export const homeFr: IHomeModel = {
  lstRecap: [
    { libelle: "Année d'expérience", value: 10 },
    { libelle: "Happy Customers", value: 10 },
    { libelle: "Completed Projects", value: 10 },
    { libelle: "Honors and Awards", value: 10 }
  ],
  lstLogos: lstLogosEntreprises
};

export const homeEn: IHomeModel = {
  lstRecap: [
    { libelle: "Years Experience", value: 10 },
    { libelle: "Happy Customers", value: 10 },
    { libelle: "Completed Projects", value: 10 },
    { libelle: "Honors and Awards", value: 10 }
  ],
  lstLogos: lstLogosEntreprises
};

export const homeEs: IHomeModel = {
  lstRecap: [
    { libelle: "Anos de experiencias", value: 10 },
    { libelle: "Happy Customers", value: 10 },
    { libelle: "Completed Projects", value: 10 },
    { libelle: "Honors and Awards", value: 10 }
  ],
  lstLogos: lstLogosEntreprises
};
