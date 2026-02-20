export interface IUiTxtModel {
  navTxt: IUiTxtNavModel;
  sidePanelTxt: IUiTxtSidePanelModel;
  homeTxt: IUiTxtHomeModel;
  aboutTxt: IUiTxtAboutModel;
  cardTxt: IUiTxtCardModel;
  portfolioTxt?: IUiTxtPortfolioModel;
  contactTxt?: IUiTxtContactModel;
}

export interface IUiTxtNavModel {
  homeTitle: string;
  aboutTitle: string;
  projectsTitle: string;
  contactTitle: string;
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

export interface IUiTxtPortfolioModel {
  portfolioTitle: string;
  typeProjectAllTitle: string;
  typeProjectLogoTitle: string;
  typeProjectVideoTitle: string;
  typeProjectFairePartTitle: string;
  typeProjectWebsiteTitle: string;
}

export interface IUiTxtContactModel {
  contactTitle: string;
  countryLabel: string;
  townLabel: string;
  streetLabel: string;
  postalCodeLabel: string;
  phoneLabel: string;
  workStatusLabel: string;
  disponibilityLabel: string;

  formTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  sujetLabel: string;
  sujetPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitBtn: string;
  successMessageTitle?: string;
  successMessageBody?: string;
  resetBtn?: string;
  requiredFieldError?: string;
  emailInvalidError?: string;
  minLengthError?: string;
}
