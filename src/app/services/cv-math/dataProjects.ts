import { TypeExperienceEnum, TypeProjectEnum } from "src/app/models/enum";
import { IProjectModel } from "src/app/models/project";

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
  photo: 'assets/portfolio/logos/MagiePourTous.png',
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

export const projectsFr: IProjectModel[] = [
  logoAlexFishing,
  logoBeeElectronique,
  logoGo2Sport,
  logoLaCasita,
  logoMagiePourTous,
  logoTess,
  logoTun,
  logoVolkany,
];