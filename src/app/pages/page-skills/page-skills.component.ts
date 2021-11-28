import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISkillModel } from 'src/app/models/skill';
import { TypeSkillEnum } from 'src/app/models/type-skill.enum';
import { SkillService } from 'src/app/services/skill.service';
import { getLstSkillsByType } from 'src/app/store/skills/skills.selectors';

@Component({
  selector: 'app-page-skills',
  templateUrl: './page-skills.component.html',
  styleUrls: ['./page-skills.component.scss']
})
export class PageSkillsComponent implements OnInit {

  public skillsBackEnd$ = new Observable<ISkillModel[]>();
  public skillsFrontEnd$ = new Observable<ISkillModel[]>();
  public skillsDevOps$ = new Observable<ISkillModel[]>();
  public skillsAdobe$ = new Observable<ISkillModel[]>();
  public skillsLangages$ = new Observable<ISkillModel[]>();

  constructor(private store: Store) {
    this.skillsBackEnd$ = store.select<ISkillModel[]>(getLstSkillsByType(TypeSkillEnum.BackEnd));
    this.skillsFrontEnd$ = store.select<ISkillModel[]>(getLstSkillsByType(TypeSkillEnum.FrontEnd));
    this.skillsDevOps$ = store.select<ISkillModel[]>(getLstSkillsByType(TypeSkillEnum.DevOps));
    this.skillsAdobe$ = store.select<ISkillModel[]>(getLstSkillsByType(TypeSkillEnum.Adobe));
    this.skillsLangages$ = store.select<ISkillModel[]>(getLstSkillsByType(TypeSkillEnum.Langages));
  }

  ngOnInit(): void {

  }
}
