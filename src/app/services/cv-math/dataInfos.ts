import { CodeSocialNetworkEnum } from 'src/app/models/enum';
import { IInfosModel, ISocialNetwork } from 'src/app/models/infos';

const infosCommon: IInfosModel = {
  name: 'Mathieu',
  famillyName: 'Le Bellec',
  available: true,
  email: 'mathieu.lebellec.pro@gmail.com',
  address: '11 Boulevard de Strasbourg, 35000 Rennes, France',
};

export const infosFr: IInfosModel = {
  ...infosCommon,
  title: 'Développeur Full Stack',
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
  ...infosCommon,
  title: 'Full Stack Developer',
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
  ...infosCommon,
  title: 'Desarrollador Full Stack',
  infosPersonnal: {
    birth: '10 Dic 1989',
    nationality: 'Francés',
    status: 'En unión de hecho',
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
