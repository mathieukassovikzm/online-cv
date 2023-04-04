import { Component, OnInit } from '@angular/core';
import { IInfosModel, IInfosPersonalModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public infosPerso = <IInfosModel>{};

  constructor(private infosService: InfosService) {}

  ngOnInit() {
    this.infosPerso = this.infosService.getInfos();
  }
}
