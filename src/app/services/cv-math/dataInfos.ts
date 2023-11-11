import { CodeSocialNetworkEnum } from 'src/app/models/enum';
import { IInfosModel, ISocialNetwork } from 'src/app/models/infos';

const infosCommon = {
  name: 'Mathieu',
  famillyName: 'Le Bellec',
  title: 'Web Developper',
  available: false,
  email: 'mathieu.lebellec.pro@gmail.com',
  address: '5 rue Jean Brulelou',
};

export const infosFr: IInfosModel = {
  name: infosCommon.name,
  famillyName: infosCommon.famillyName,
  title: infosCommon.title,
  available: infosCommon.available,
  email: infosCommon.email,
  address: infosCommon.address,
  infosPersonnal: {
    birth: { question: 'Date de naissance:', answer: '10 Dec 1989' },
    nationality: { question: 'Nationalité:', answer: 'Française' },
    status: { question: 'Statut:', answer: 'Pacsé' },
    drivingLiscence: { question: 'Permis de conduire:', answer: 'Oui' },
    car: { question: 'Voiture', answer: 'Oui' },
  },
  curriculum: {
    question: 'Télécharger CV:',
    answer: './assets/Mathieu_Le_Bellec_Cv_Fr_V2.pdf',
  },
};

export const infosEn: IInfosModel = {
  name: infosCommon.name,
  famillyName: infosCommon.famillyName,
  title: infosCommon.title,
  available: infosCommon.available,
  email: infosCommon.email,
  address: infosCommon.address,
  infosPersonnal: {
    birth: { question: 'Date of birth:', answer: '10 Dec 1989' },
    nationality: { question: 'Nationality:', answer: 'French' },
    status: { question: 'Marital Status:', answer: 'In a civil partnership' },
    drivingLiscence: {
      question: 'International Driving Licence:',
      answer: 'Yes',
    },
    car: { question: 'Car', answer: 'Yes' },
  },
  curriculum: {
    question: 'Download CV:',
    answer: './assets/Mathieu_Le_Bellec_Cv_Fr_V2.pdf',
  },
};

export const infosEs: IInfosModel = {
  name: infosCommon.name,
  famillyName: infosCommon.famillyName,
  title: infosCommon.title,
  available: infosCommon.available,
  email: infosCommon.email,
  address: infosCommon.address,
  infosPersonnal: {
    birth: { question: 'Fecha de nacimiento:', answer: '10 Dic 1989' },
    nationality: { question: 'Nacionalidad:', answer: 'Francés' },
    status: {
      question: 'Estado Civil:',
      answer: 'En unión de hecho sin hijos',
    },
    drivingLiscence: { question: 'Licencia de conducir:', answer: 'Si' },
    car: { question: 'Auto', answer: 'Si' },
  },
  curriculum: {
    question: 'Descargar CV:',
    answer: './assets/Mathieu_Le_Bellec_Cv_Fr_V2.pdf',
  },
};

export const lstSocialNetwork: ISocialNetwork[] = [
  {
    code: CodeSocialNetworkEnum.FB,
    name: 'Facebook',
    url: 'https://www.facebook.com/mathieu.lebellec/',
    display: false,
  },
  {
    code: CodeSocialNetworkEnum.IS,
    name: 'Instagram',
    url: 'https://www.instagram.com/mathieukassovikzm/',
    display: false,
  },
  {
    code: CodeSocialNetworkEnum.LK,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/mathieu-le-bellec-469119b5/',
    display: true,
  },
  {
    code: CodeSocialNetworkEnum.GH,
    name: 'Github',
    url: 'https://github.com/mathieukassovikzm',
    display: true,
  },
  {
    code: CodeSocialNetworkEnum.BI,
    name: 'Bitbucket',
    url: 'https://bitbucket.org/mathieukassovikzm/',
    display: true,
  },
];
