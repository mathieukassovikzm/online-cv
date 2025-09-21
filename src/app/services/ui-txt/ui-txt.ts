import { IUiTxtCardModel, IUiTxtModel } from 'src/app/models/uiTxt';
import { uiTxtAboutEn, uiTxtAboutEs, uiTxtAboutFr } from './ui-txt-about';
import { uiTxtHomeEn, uiTxtHomeEs, uiTxtHomeFr } from './ui-txt-home';
import {
  uiTxtSidePanelEn,
  uiTxtSidePanelEs,
  uiTxtSidePanelFr,
} from './ui-txt-side-panel';

export const uiTxtCardFr: IUiTxtCardModel = {
  tasksTitle: 'Responsabilités / Tâches :',
  technicalEnvTitle: 'Environnement technique :',
};

export const uiTxtCardEn: IUiTxtCardModel = {
  tasksTitle: 'Responsabilités / Tâches :',
  technicalEnvTitle: 'Environnement technique :',
};

export const uiTxtCardEs: IUiTxtCardModel = {
  tasksTitle: 'Responsabilités / Tâches :',
  technicalEnvTitle: 'Environnement technique :',
};

export const uiTxtFr: IUiTxtModel = {
  sidePanelTxt: uiTxtSidePanelFr,
  homeTxt: uiTxtHomeFr,
  aboutTxt: uiTxtAboutFr,
  cardTxt: uiTxtCardFr,
};

export const uiTxtEn: IUiTxtModel = {
  sidePanelTxt: uiTxtSidePanelEn,
  homeTxt: uiTxtHomeEn,
  aboutTxt: uiTxtAboutEn,
  cardTxt: uiTxtCardEn,
};

export const uiTxtEs: IUiTxtModel = {
  sidePanelTxt: uiTxtSidePanelEs,
  homeTxt: uiTxtHomeEs,
  aboutTxt: uiTxtAboutEs,
  cardTxt: uiTxtCardEs,
};
