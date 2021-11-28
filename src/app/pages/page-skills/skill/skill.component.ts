import { Component, Input, OnInit } from '@angular/core';
import { ISkillModel } from 'src/app/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill = <ISkillModel>{};

  constructor() { }

  ngOnInit(): void {
  }

  getBarWidth(): string {
    return `width:${this.skill.power}%`;
  }
}
