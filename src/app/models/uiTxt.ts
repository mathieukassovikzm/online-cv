export interface IUiTxtModel {
  sidePanelTxt: IUiTxtSidePanelModel;
  homeTxt: IUiTxtHomeModel;
  aboutTxt: IUiTxtAboutModel;
  cardTxt: IUiTxtCardModel;
}

export interface IUiTxtSidePanelModel {
  topDescTitles: IUiTxtTopDescModel;
  infosPersoTitles: IUiTxtInfosPersoModel;
  skillsTitles: IUiTxtSkillsModel;
}

export interface IUiTxtTopDescModel {
  languageTitle: string;
  cvTitle: string;
}

export interface IUiTxtInfosPersoModel {
  birthTitle: string;
  nationalityTitle: string;
  statusTitle: string;
  drivingLiscenceTitle: string;
  carTitle: string;
}

export interface IUiTxtSkillsModel {
  bddTitle: string;
  versionningTitle: string;
  toolsTitle: string;
}

export interface IUiTxtHomeModel {
  bannerTxt: string;
  bannerPhrases: string[];
  servicesTitle: string;
  recommendationsTitle: string;
}

export interface IUiTxtAboutModel {
  extractTitle: string;
  hobbiesTitle: string;
  lifeTimelineTitle: string;
  allExpeTitle: string;
  educationTitle: string;
  archivementTitle: string;
  expeProTitle: string;
}

export interface IUiTxtCardModel {
  tasksTitle: string;
  technicalEnvTitle: string;
}
