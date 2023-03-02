import { Component, OnInit } from '@angular/core';
import {
  CodeSocialNetworkEnum,
  ISocialNetwork,
} from 'src/app/models/socialNetwork';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-lst-socials',
  templateUrl: './lst-socials.component.html',
  styleUrls: ['./lst-socials.component.scss'],
})
export class LstSocialsComponent implements OnInit {
  public lstSocials: ISocialNetwork[] = [];
  public codeFB = CodeSocialNetworkEnum.FB;
  public codeIS = CodeSocialNetworkEnum.IS;
  public codeLK = CodeSocialNetworkEnum.LK;
  public codeGH = CodeSocialNetworkEnum.GH;
  public codeBI = CodeSocialNetworkEnum.BI;

  constructor(private infosService: InfosService) {}

  ngOnInit() {
    this.lstSocials = this.infosService.getLstSocialNetwork();
  }
}
