import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CodeSocialNetworkEnum } from 'src/app/models/enum';
import { ISocialNetwork } from 'src/app/models/infos';
import { InfosService } from 'src/app/services/infos.service';
import { SvgBitbucketComponent } from '../../svgs/social/svg-bitbucket/svg-bitbucket.component';
import { SvgFacebookComponent } from '../../svgs/social/svg-facebook/svg-facebook.component';
import { SvgGithubComponent } from '../../svgs/social/svg-github/svg-github.component';
import { SvgInstagramComponent } from '../../svgs/social/svg-instagram/svg-instagram.component';
import { SvgLinkedinComponent } from '../../svgs/social/svg-linkedin/svg-linkedin.component';

const modules = [CommonModule];
const svgs = [SvgFacebookComponent, SvgInstagramComponent, SvgGithubComponent, SvgBitbucketComponent, SvgLinkedinComponent,];

@Component({
  selector: 'app-lst-socials',
  templateUrl: './lst-socials.component.html',
  styleUrls: ['./lst-socials.component.scss'],
  imports: [...modules, ...svgs],
  standalone: true
})
export class LstSocialsComponent implements OnInit {
  public lstSocials: ISocialNetwork[] = [];
  public codeFB = CodeSocialNetworkEnum.FB;
  public codeIS = CodeSocialNetworkEnum.IS;
  public codeLK = CodeSocialNetworkEnum.LK;
  public codeGH = CodeSocialNetworkEnum.GH;
  public codeBI = CodeSocialNetworkEnum.BI;

  constructor(private infosService: InfosService) { }

  ngOnInit() {
    this.lstSocials = this.infosService.getLstSocialNetwork();
  }
}
