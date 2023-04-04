export interface IUiTxtModel {
  sidePanelTxt: IUiTxtSidePanelModel;
  aboutTxt: IUiTxtAboutModel;
  cardTxt: IUiTxtCardModel;
}

export interface IUiTxtSidePanelModel {
  skillsTitles: IUiTxtSkillsModel;
}

export interface IUiTxtSkillsModel {
  bddTitle: string;
  versionningTitle: string;
  toolsTitle: string;
}

export interface IUiTxtAboutModel {
  extractTitle: string;
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
