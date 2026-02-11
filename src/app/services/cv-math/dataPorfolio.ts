import { TypeProjectEnum } from "src/app/models/enum";
import { IProjectModel } from "src/app/models/project";

const logoAlexFishing = <IProjectModel>{
  id: 1,
  title: 'Logo Alex Fishing',
  photo: 'assets/portfolio/logos/AlexFishing.png',
  type: TypeProjectEnum.Logo,
};

const logoBeeElectronique = <IProjectModel>{
  id: 2,
  title: 'Logo Bee Electronique',
  photo: 'assets/portfolio/logos/BeeElectronique.png',
  type: TypeProjectEnum.Logo,
};

const logoGo2Sport = <IProjectModel>{
  id: 3,
  title: 'Logo Go2Sport',
  photo: 'assets/portfolio/logos/Go2Sport.png',
  type: TypeProjectEnum.Logo,
};

const logoLaCasita = <IProjectModel>{
  id: 4,
  title: 'Logo La Casita',
  photo: 'assets/portfolio/logos/LaCasita.png',
  type: TypeProjectEnum.Logo,
};

const logoMagiePourTous = <IProjectModel>{
  id: 5,
  title: 'Logo Magie Pour Tous',
  photo: 'assets/portfolio/logos/MagiePourTous.jpg',
  type: TypeProjectEnum.Logo,
};

const logoTess = <IProjectModel>{
  id: 6,
  title: 'Logo Tess',
  photo: 'assets/portfolio/logos/Tess.png',
  type: TypeProjectEnum.Logo,
};

const logoTun = <IProjectModel>{
  id: 7,
  title: 'Logo The Unchained Nomads',
  photo: 'assets/portfolio/logos/TheUnchainedNomads.png',
  type: TypeProjectEnum.Logo,
};

const logoVolkany = <IProjectModel>{
  id: 8,
  title: 'Logo Volkany',
  photo: 'assets/portfolio/logos/Volkany.png',
  type: TypeProjectEnum.Logo,
};

export const projectsFr: IProjectModel[] = [
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
export const projectsEn: IProjectModel[] = [
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
export const projectsEs: IProjectModel[] = [
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