import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { SkillService } from "src/app/services/skill.service";
import { ActSkillsGetLstSkills, ActSkillsGetLstSkillsError, ActSkillsGetLstSkillsSuccess, ActSkillsGetSkill } from "./skills.actions";

@Injectable()

/*
 * Ngrx Effects: Permet d'effectuer les appels au service Changement pour renseigner le store
 */
export class SkillsEffects {
  constructor(private actions$: Actions, private skillService: SkillService) { }

  ActSkillsGetLstSkills$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActSkillsGetLstSkills),
      switchMap(() => this.skillService.getLstSkillsFromServeur().pipe(
        map(lstSkills => ActSkillsGetLstSkillsSuccess({ lstSkills })),
        catchError(error => of(ActSkillsGetLstSkillsError({ error })))
      ))
    );
  });

}