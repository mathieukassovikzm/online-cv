import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IHobbyModel } from 'src/app/models/about';
import { TypeHobbyEnum } from 'src/app/models/enum';

const modules = [CommonModule];

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
  imports: [...modules],
  standalone: true
})
export class HobbyComponent {
  readonly item = input<IHobbyModel>();

  typeCreativity = TypeHobbyEnum.Creativity;
  typeSport = TypeHobbyEnum.Sport;
  typeOther = TypeHobbyEnum.Other;

  public typeLabel(): string {
    switch (this.item()?.type) {
      case TypeHobbyEnum.Sport:
        return 'Sport';
      case TypeHobbyEnum.Creativity:
        return 'Creative';
      default:
        return '';
    }
  }
}
