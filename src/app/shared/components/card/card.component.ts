import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TypeExperienceEnum } from 'src/app/models/enum';
import { IExperienceModel } from 'src/app/models/experience';
import { IUiTxtCardModel } from 'src/app/models/uiTxt';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @HostBinding('class') class = 'card-component';
  @Input() item: IExperienceModel | undefined;
  public txt?: IUiTxtCardModel;

  public typeExpeEduc = TypeExperienceEnum.Education;
  public typeExpeArchi = TypeExperienceEnum.Archievement;
  public typeExpeExpePro = TypeExperienceEnum.ExperiencePro;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.txt = this.uiService.getUiTxt()?.cardTxt;
  }
}
