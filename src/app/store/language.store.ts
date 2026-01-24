import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import _ from 'lodash';
import { IAboutModel, IExperienceModel } from '../models/about';
import { CodeLanguageEnum, PagesEnum } from '../models/enum';
import { IHomeModel } from '../models/home';
import { IInfosModel, ILanguageModel } from '../models/infos';
import { IUiTxtModel } from '../models/uiTxt';
import { aboutEn, aboutEs, aboutFr } from '../services/cv-math/dataAbout';
import { homeEn, homeEs, homeFr } from '../services/cv-math/dataHome';
import { infosEn, infosEs, infosFr } from '../services/cv-math/dataInfos';
import { languagesEn, languagesEs, languagesFr } from '../services/cv-math/dataLanguages';
import { uiTxtEn, uiTxtEs, uiTxtFr } from '../services/ui-txt/ui-txt';

type LanguageState = {
	uiLanguage: CodeLanguageEnum;
};

const initialState: LanguageState = {
	uiLanguage: CodeLanguageEnum.FR,
};

export const LanguageStore = signalStore(
	{ providedIn: 'root' },
	withState<LanguageState>(initialState),
	withMethods((
		store,
		router = inject(Router),
		route = inject(ActivatedRoute)
	) => ({

		//#region UI Language

		setUiLanguage(lang: CodeLanguageEnum): void {
			if (lang === undefined || lang === null) {
				lang = this.getUsersLocale(CodeLanguageEnum.FR);
			}
			patchState(store, { uiLanguage: lang });
		},

		setUiLanguageAndNavigate(lang: CodeLanguageEnum): void {
			this.setUiLanguage(lang);
			// With query parameters
			router.navigate([], {
				queryParams: { lang },
				relativeTo: route,
				queryParamsHandling: 'merge',
			});
		},

		getUsersLocale(defaultValue: CodeLanguageEnum): CodeLanguageEnum {
			if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
				return defaultValue;
			}
			const wn = window.navigator as any;
			let lang = wn.languages ? wn.languages[0] : defaultValue;
			lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
			switch (lang) {
				case 'fr':
				case 'fr-FR':
				case 'fr-CA':
					return CodeLanguageEnum.FR;
				case 'en':
				case 'en-US':
				case 'en-GB':
					return CodeLanguageEnum.EN;
				case 'es':
				case 'es-ES':
				case 'es-MX':
					return CodeLanguageEnum.ES;
				default:
					return defaultValue;
			}
		},

		getUiTxt(): IUiTxtModel {
			const language = store.uiLanguage();
			switch (language) {
				case CodeLanguageEnum.FR:
					return uiTxtFr;
				case CodeLanguageEnum.EN:
					return uiTxtEn;
				case CodeLanguageEnum.ES:
					return uiTxtEs;
				default:
					return uiTxtFr;
			}
		},

		getUiPageName(page: PagesEnum): string {
			const navTxt = this.getUiTxt().navTxt;

			switch (page) {
				case PagesEnum.HOME:
					return navTxt.homeTitle;
				case PagesEnum.ABOUT:
					return navTxt.aboutTitle;
				case PagesEnum.PROJECTS:
					return navTxt.projectsTitle;
				case PagesEnum.CONTACTS:
					return navTxt.contactTitle;
				default:
					return '';
			}
		},

		getHomeTxt(): IHomeModel {
			const language = store.uiLanguage();
			switch (language) {
				case CodeLanguageEnum.FR:
					return homeFr;
				case CodeLanguageEnum.EN:
					return homeEn;
				case CodeLanguageEnum.ES:
					return homeEs;
				default:
					return homeFr;
			}
		},

		getInfosTxt(): IInfosModel {
			const language = store.uiLanguage();
			switch (language) {
				case CodeLanguageEnum.FR:
					return infosFr;
				case CodeLanguageEnum.EN:
					return infosEn;
				case CodeLanguageEnum.ES:
					return infosEs;
				default:
					return infosFr;
			}
		},

		getLanguages(): ILanguageModel[] {
			const language = store.uiLanguage();
			switch (language) {
				case CodeLanguageEnum.FR:
					return languagesFr;
				case CodeLanguageEnum.EN:
					return languagesEn;
				case CodeLanguageEnum.ES:
					return languagesEs;
				default:
					return languagesFr;
			}
		},

		getAboutTxt(): IAboutModel {
			const language = store.uiLanguage();
			switch (language) {
				case CodeLanguageEnum.FR:
					return aboutFr;
				case CodeLanguageEnum.EN:
					return aboutEn;
				case CodeLanguageEnum.ES:
					return aboutEs;
				default:
					return aboutFr;
			}
		},

		getLifeTimeline(): IExperienceModel[] {
			const about = this.getAboutTxt();
			let timeline: IExperienceModel[] = _.union(
				about?.educations,
				about?.archievements,
				about?.experiencesPro
			);
			timeline = _.orderBy(timeline, (i) => i.dateEnd, ['desc']);
			return timeline;
		},

		//#endregion
	}))
);