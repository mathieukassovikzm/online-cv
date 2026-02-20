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
import { uiTxtContactEn, uiTxtContactEs, uiTxtContactFr } from './ui-txt-contact';

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
  contactTxt: uiTxtContactFr,
};

export const uiTxtEn: IUiTxtModel = {
  navTxt: uiTxtNavEn,
  sidePanelTxt: uiTxtSidePanelEn,
  homeTxt: uiTxtHomeEn,
  aboutTxt: uiTxtAboutEn,
  cardTxt: uiTxtCardEn,
  portfolioTxt: uiTxtPortfolioEn,
  contactTxt: uiTxtContactEn,
};

export const uiTxtEs: IUiTxtModel = {
  navTxt: uiTxtNavEs,
  sidePanelTxt: uiTxtSidePanelEs,
  homeTxt: uiTxtHomeEs,
  aboutTxt: uiTxtAboutEs,
  cardTxt: uiTxtCardEs,
  portfolioTxt: uiTxtPortfolioEs,
  contactTxt: uiTxtContactEs,
};
