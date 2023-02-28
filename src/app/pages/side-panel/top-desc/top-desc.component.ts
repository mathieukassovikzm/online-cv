import { Component, OnInit } from '@angular/core';
import { IInfosModel } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-top-desc',
  templateUrl: './top-desc.component.html',
  styleUrls: ['./top-desc.component.scss']
})
export class TopDescComponent implements OnInit {

  public info = <IInfosModel>{};
  constructor(private infosService: InfosService) { }

  ngOnInit(): void {
    this.info = this.infosService.getInfos();
  }

}
