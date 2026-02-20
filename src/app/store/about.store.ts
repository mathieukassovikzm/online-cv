import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { IExperienceModel } from '../models/about';
import { CodeLanguageEnum, TypeSkillEnum } from '../models/enum';
import { aboutEn, aboutEs, aboutFr } from '../services/cv-math/dataAbout';
import { LanguageStore } from './language.store';
import { ISocialNetwork, ISkillModel } from '../models/infos';
import { lstSocialNetwork } from '../services/cv-math/dataInfos';
import { skills } from '../services/cv-math/dataSkills';

type AboutState = {
};

const initialState: AboutState = {
};

export const AboutStore = signalStore(
  { providedIn: 'root' },
  withState<AboutState>(initialState),
  withComputed((store, languageStore = inject(LanguageStore)) => ({
    getAboutTxt: computed(() => {
      const language = languageStore.uiLanguage();
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
    }),
  })),
  withMethods((store, languageStore = inject(LanguageStore)) => ({
    getLifeTimeline(): IExperienceModel[] {
      const about = store.getAboutTxt();
      // Combine all timeline events using Set to avoid duplicates
      let timeline: IExperienceModel[] = [
        ...new Set([
          ...about?.educations || [],
          ...about?.archievements || [],
          ...about?.experiencesPro || []
        ])
      ];
      // Sort by dateEnd in descending order
      timeline = timeline.sort((a, b) => new Date(b.dateEnd).getTime() - new Date(a.dateEnd).getTime());
      return timeline;
    },

    getLstSocialNetwork(): ISocialNetwork[] {
      return lstSocialNetwork.filter(network => network.display === true);
    },

    getTypesSkills(): Array<Object> {
      return Object.keys(TypeSkillEnum).filter((item) => {
        return isNaN(Number(item));
      });
    },

    /** GET SKILLS */
    getLstSkills(): ISkillModel[] {
      return skills;
    },

    getLstSkillsByType(typeSkill: TypeSkillEnum): ISkillModel[] {
      return skills.filter(skill => skill.type === typeSkill && skill.display === true);
    }
  }))
);