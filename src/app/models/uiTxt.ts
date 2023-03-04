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
  educationTitle: string;
  archivementTitle: string;
}

export interface IUiTxtCardModel {
  tasksTitle: string;
  technicalEnvTitle: string;
}
