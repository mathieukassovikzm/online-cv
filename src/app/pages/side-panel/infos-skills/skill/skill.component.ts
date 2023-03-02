import { Component, Input, OnInit } from '@angular/core';
import { ISkillModel } from 'src/app/models/infos';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input() skill = <ISkillModel>{};

  constructor() {}

  ngOnInit(): void {}

  getBarWidth(): string {
    return `stroke-dashoffset:${100 - this.skill.power}`;
  }
}
