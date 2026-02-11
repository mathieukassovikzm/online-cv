import { IUiTxtCardModel, IUiTxtModel } from 'src/app/models/uiTxt';
import { uiTxtAboutEn, uiTxtAboutEs, uiTxtAboutFr } from './ui-txt-about';
import { uiTxtHomeEn, uiTxtHomeEs, uiTxtHomeFr } from './ui-txt-home';
import {
  uiTxtSidePanelEn,
  uiTxtSidePanelEs,
  uiTxtSidePanelFr,
} from './ui-txt-side-panel';
import { uiTxtNavEn, uiTxtNavEs, uiTxtNavFr } from './ui-txt-nav';
import { uiTxtPortfolioEn, uiTxtPortfolioEs, uiTxtPortfolioFr } from './ui-txt-portfolio';

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
  portfolioTxt: uiTxtPortfolioFr,
};

export const uiTxtEn: IUiTxtModel = {
  navTxt: uiTxtNavEn,
  sidePanelTxt: uiTxtSidePanelEn,
  homeTxt: uiTxtHomeEn,
  aboutTxt: uiTxtAboutEn,
  cardTxt: uiTxtCardEn,
  portfolioTxt: uiTxtPortfolioEn,
};

export const uiTxtEs: IUiTxtModel = {
  navTxt: uiTxtNavEs,
  sidePanelTxt: uiTxtSidePanelEs,
  homeTxt: uiTxtHomeEs,
  aboutTxt: uiTxtAboutEs,
  cardTxt: uiTxtCardEs,
  portfolioTxt: uiTxtPortfolioEs,
};
