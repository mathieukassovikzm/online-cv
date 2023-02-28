import { Component, OnInit } from '@angular/core';
import { IInfosPersonalModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-infos-perso',
  templateUrl: './infos-perso.component.html',
  styleUrls: ['./infos-perso.component.scss']
})
export class InfosPersoComponent implements OnInit {

  public infosPerso = <IInfosPersonalModel>{};
  constructor(private infosService: InfosService) { }

  ngOnInit() {
    this.infosPerso = this.infosService.getInfos().infosPersonnal;
  }

}
