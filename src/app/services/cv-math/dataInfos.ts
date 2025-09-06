import { CodeSocialNetworkEnum } from 'src/app/models/enum';
import { IInfosModel, ISocialNetwork } from 'src/app/models/infos';

const infosCommon = {
  name: 'Mathieu',
  famillyName: 'Le Bellec',
  title: 'Full Stack Developper',
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
    birth: '10 Dec 1989',
    nationality: 'Française',
    status: 'Pacsé',
    drivingLiscence: 'Oui',
    car: 'Oui',
  },
  curriculum: './assets/Mathieu_Le_Bellec_Cv_Fr_V2.pdf',
};

export const infosEn: IInfosModel = {
  name: infosCommon.name,
  famillyName: infosCommon.famillyName,
  title: infosCommon.title,
  available: infosCommon.available,
  email: infosCommon.email,
  address: infosCommon.address,
  infosPersonnal: {
    birth: '10 Dec 1989',
    nationality: 'French',
    status: 'In a civil partnership',
    drivingLiscence: 'Yes',
    car: 'Yes',
  },
  curriculum: './assets/Mathieu_Le_Bellec_Cv_Fr_V2.pdf',
};

export const infosEs: IInfosModel = {
  name: infosCommon.name,
  famillyName: infosCommon.famillyName,
  title: infosCommon.title,
  available: infosCommon.available,
  email: infosCommon.email,
  address: infosCommon.address,
  infosPersonnal: {
    birth: '10 Dic 1989',
    nationality: 'Francés',
    status: 'En unión de hecho sin hijos',
    drivingLiscence: 'Si',
    car: 'Si',
  },
  curriculum: './assets/Mathieu_Le_Bellec_Cv_Fr_V2.pdf',
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
