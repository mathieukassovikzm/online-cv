import { IUiTxtCardModel, IUiTxtModel } from 'src/app/models/uiTxt';
import { uiTxtAboutEn, uiTxtAboutEs, uiTxtAboutFr } from './ui-txt-about';
import { uiTxtHomeEn, uiTxtHomeEs, uiTxtHomeFr } from './ui-txt-home';
import {
  uiTxtSidePanelEn,
  uiTxtSidePanelEs,
  uiTxtSidePanelFr,
} from './ui-txt-side-panel';
import { uiTxtNavEn, uiTxtNavEs, uiTxtNavFr } from './ui-txt-nav';

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
  navTxt: uiTxtNavFr,
  sidePanelTxt: uiTxtSidePanelFr,
  homeTxt: uiTxtHomeFr,
  aboutTxt: uiTxtAboutFr,
  cardTxt: uiTxtCardFr,
};

export const uiTxtEn: IUiTxtModel = {
  navTxt: uiTxtNavEn,
  sidePanelTxt: uiTxtSidePanelEn,
  homeTxt: uiTxtHomeEn,
  aboutTxt: uiTxtAboutEn,
  cardTxt: uiTxtCardEn,
};

export const uiTxtEs: IUiTxtModel = {
  navTxt: uiTxtNavEs,
  sidePanelTxt: uiTxtSidePanelEs,
  homeTxt: uiTxtHomeEs,
  aboutTxt: uiTxtAboutEs,
  cardTxt: uiTxtCardEs,
};
