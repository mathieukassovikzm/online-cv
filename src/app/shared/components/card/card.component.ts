import { Component, Input, OnInit } from '@angular/core';
import { IExperienceModel } from 'src/app/models/experience';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: IExperienceModel | undefined;
  constructor() {}

  ngOnInit() {}
}
