import { Component, Input } from '@angular/core';
import { TypeHobbyEnum } from 'src/app/models/enum';
import { IHobbyModel } from 'src/app/models/hobby';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent {
  @Input() item: IHobbyModel | undefined;

  typeCreativity = TypeHobbyEnum.Creativity;
  typeSport = TypeHobbyEnum.Sport;
  typeOther = TypeHobbyEnum.Other;
  
  constructor(
    private uiService: UiService
  ) { }

}
