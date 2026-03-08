import { TypeProjectEnum } from "src/app/models/enum";
import { IProjectModel } from "src/app/models/project";

//#region Websites
const websiteGo2Sport = <IProjectModel>{
  title: 'Site Web Go2Sport',
  link: 'https://go2sport-df0d6.firebaseapp.com/home',
  photo: 'assets/portfolio/sites/Website_Go2Sport.jpg',
  type: TypeProjectEnum.Website,
};

const websiteMagiePourTous = <IProjectModel>{
  title: 'Site Web Magie Pour Tous',
  link: 'https://magie-pour-tous.firebaseapp.com/home',
  photo: 'assets/portfolio/sites/Website_MagiePourTous.jpg',
  type: TypeProjectEnum.Website,
};

const websiteWhoWantToBeAMillionnaire = <IProjectModel>{
  title: 'Site Web Who Want To Be A Millionnaire',
  link: 'https://whowantstobeamillionnair-3032c.firebaseapp.com/home',
  photo: 'assets/portfolio/sites/Website_Qvgdm.jpg',
  type: TypeProjectEnum.Website,
};

const websiteTichat29 = <IProjectModel>{
  title: 'Site Web Tichat 29',
  link: 'https://tichat29-5cca0.firebaseapp.com/',
  photo: 'assets/portfolio/sites/Website_Tichat29.jpg',
  type: TypeProjectEnum.Website,
};

//#endregion

//#region Logos
const logoAlexFishing = <IProjectModel>{
  title: 'Logo Alex Fishing',
  photo: 'assets/portfolio/logos/AlexFishing.png',
  type: TypeProjectEnum.Logo,
};

const logoBeeElectronique = <IProjectModel>{
  title: 'Logo Bee Electronique',
  photo: 'assets/portfolio/logos/BeeElectronique.png',
  type: TypeProjectEnum.Logo,
};

const logoGo2Sport = <IProjectModel>{
  title: 'Logo Go2Sport',
  photo: 'assets/portfolio/logos/Go2Sport.png',
  type: TypeProjectEnum.Logo,
};
const logoLaCasita = <IProjectModel>{
  title: 'Logo La Casita',
  photo: 'assets/portfolio/logos/LaCasita.png',
  type: TypeProjectEnum.Logo,
};

const logoMagiePourTous = <IProjectModel>{
  title: 'Logo Magie Pour Tous',
  photo: 'assets/portfolio/logos/MagiePourTous.jpg',
  type: TypeProjectEnum.Logo,
};

const logoTess = <IProjectModel>{
  title: 'Logo Tess',
  photo: 'assets/portfolio/logos/Tess.png',
  type: TypeProjectEnum.Logo,
};

const logoTun = <IProjectModel>{
  title: 'Logo The Unchained Nomads',
  photo: 'assets/portfolio/logos/TheUnchainedNomads.png',
  type: TypeProjectEnum.Logo,
};

const logoVolkany = <IProjectModel>{
  title: 'Logo Volkany',
  photo: 'assets/portfolio/logos/Volkany.png',
  type: TypeProjectEnum.Logo,
};
//#endregion

//#region Vidéos
const videoDomaineBoisQuelen = <IProjectModel>{
  title: 'Vidéo Domaine du Bois de Quelen',
  link: 'https://www.youtube.com/watch?v=LsbL2GnKyI8',
  photo: 'assets/portfolio/videos/Video_BoisQuelen.jpg',
  type: TypeProjectEnum.Videos,
};

const videoGo2SportFitness = <IProjectModel>{
  title: 'Vidéo Go2Sport Fitness',
  link: 'https://www.youtube.com/watch?v=X9a_4Weidew',
  photo: 'assets/portfolio/videos/Video_Go2Sport.jpg',
  type: TypeProjectEnum.Videos,
};

const videoGo2SportEcoles = <IProjectModel>{
  title: 'Vidéo Go2Sport Ecoles',
  link: 'https://www.youtube.com/watch?v=LPQ-fO-aLDY',
  photo: 'assets/portfolio/videos/Video_Go2Sport.jpg',
  type: TypeProjectEnum.Videos,
};

const videoTennisCesson = <IProjectModel>{
  title: 'Vidéo Soirée club Tennis Cesson',
  link: 'https://www.youtube.com/watch?v=wxPNe2u9bZ0',
  photo: 'assets/portfolio/videos/Video_TennisCesson.jpg',
  type: TypeProjectEnum.Videos,
};
//#endregion

//#region Faire-parts
const fpAxel = <IProjectModel>{
  title: 'Faire-part Axel',
  photo: 'assets/portfolio/faire-part/FPN_Axel.jpg',
  type: TypeProjectEnum.FairePart,
};

const fpAmel = <IProjectModel>{
  title: 'Faire-part Amel',
  photo: 'assets/portfolio/faire-part/FPN_Amel.jpg',
  type: TypeProjectEnum.FairePart,
};

const fpJulie = <IProjectModel>{
  title: 'Faire-part Julie',
  photo: 'assets/portfolio/faire-part/FPN_Julie.jpg',
  type: TypeProjectEnum.FairePart,
};

const fpLeo = <IProjectModel>{
  title: 'Faire-part Leo',
  photo: 'assets/portfolio/faire-part/FPN_Leo.jpg',
  type: TypeProjectEnum.FairePart,
};

const fpMael = <IProjectModel>{
  title: 'Faire-part Mael',
  photo: 'assets/portfolio/faire-part/FPN_Mael.jpg',
  type: TypeProjectEnum.FairePart,
};

const fpLouisette = <IProjectModel>{
  title: 'Faire-part Louisette',
  photo: 'assets/portfolio/faire-part/FPN_Louisette.jpg',
  type: TypeProjectEnum.FairePart,
};
//#endregion

//#region FR
const projectsWebsitesFr: IProjectModel[] = [
  {
    ...websiteMagiePourTous
  },
  {
    ...websiteWhoWantToBeAMillionnaire
  },
  {
    ...websiteTichat29
  },
  {
    ...websiteGo2Sport
  },
];
const projectsLogosFr: IProjectModel[] = [
  {
    ...logoAlexFishing
  },
  {
    ...logoBeeElectronique
  },
  {
    ...logoGo2Sport
  },
  {
    ...logoLaCasita
  },
  {
    ...logoMagiePourTous
  },
  {
    ...logoTess
  },
  {
    ...logoTun
  },
  {
    ...logoVolkany
  },
];
const projectsVideosFr: IProjectModel[] = [
  {
    ...videoDomaineBoisQuelen
  },
  {
    ...videoGo2SportFitness
  },
  {
    ...videoGo2SportEcoles
  },
  {
    ...videoTennisCesson
  },
];
const projectsFairesPartsFr: IProjectModel[] = [
  {
    ...fpAxel
  },
  {
    ...fpAmel
  },
  {
    ...fpJulie
  },
  {
    ...fpLeo
  },
  {
    ...fpMael
  },
  {
    ...fpLouisette
  },
];
export const projectsFr: IProjectModel[] = [
  ...projectsWebsitesFr,
  ...projectsLogosFr,
  ...projectsVideosFr,
  ...projectsFairesPartsFr
];
// #endregion

//#region EN
const projectsWebsitesEn: IProjectModel[] = [
  {
    ...websiteMagiePourTous
  },
  {
    ...websiteWhoWantToBeAMillionnaire
  },
  {
    ...websiteTichat29
  },
  {
    ...websiteGo2Sport
  },
];
const projectsLogosEn: IProjectModel[] = [
  {
    ...logoAlexFishing
  },
  {
    ...logoBeeElectronique
  },
  {
    ...logoGo2Sport
  },
  {
    ...logoLaCasita
  },
  {
    ...logoMagiePourTous
  },
  {
    ...logoTess
  },
  {
    ...logoTun
  },
  {
    ...logoVolkany
  },
];
const projectsFairesPartsEn: IProjectModel[] = [
  {
    ...fpAxel
  },
  {
    ...fpAmel
  },
  {
    ...fpJulie
  },
  {
    ...fpLeo
  },
  {
    ...fpMael
  },
  {
    ...fpLouisette
  },
];
const projectsVideosEn: IProjectModel[] = [
  {
    ...videoDomaineBoisQuelen
  },
  {
    ...videoGo2SportFitness
  },
  {
    ...videoGo2SportEcoles
  },
  {
    ...videoTennisCesson
  },
];
export const projectsEn: IProjectModel[] = [
  ...projectsWebsitesEn,
  ...projectsLogosEn,
  ...projectsFairesPartsEn,
  ...projectsVideosEn
];
// #endregion

//#region ES
const projectsWebsitesEs: IProjectModel[] = [
  {
    ...websiteMagiePourTous
  },
  {
    ...websiteWhoWantToBeAMillionnaire
  },
  {
    ...websiteTichat29
  },
  {
    ...websiteGo2Sport
  },
];
const projectsLogosEs: IProjectModel[] = [
  {
    ...logoAlexFishing
  },
  {
    ...logoBeeElectronique
  },
  {
    ...logoGo2Sport
  },
  {
    ...logoLaCasita
  },
  {
    ...logoMagiePourTous
  },
  {
    ...logoTess
  },
  {
    ...logoTun
  },
  {
    ...logoVolkany
  },
];
const projectsFairesPartsEs: IProjectModel[] = [
  {
    ...fpAxel
  },
  {
    ...fpAmel
  },
  {
    ...fpJulie
  },
  {
    ...fpLeo
  },
  {
    ...fpMael
  },
  {
    ...fpLouisette
  },
];
const projectsVideosEs: IProjectModel[] = [
  {
    ...videoDomaineBoisQuelen
  },
  {
    ...videoGo2SportFitness
  },
  {
    ...videoGo2SportEcoles
  },
  {
    ...videoTennisCesson
  },
];
export const projectsEs: IProjectModel[] = [
  ...projectsWebsitesEs,
  ...projectsLogosEs,
  ...projectsFairesPartsEs,
  ...projectsVideosEs
];
// #endregion