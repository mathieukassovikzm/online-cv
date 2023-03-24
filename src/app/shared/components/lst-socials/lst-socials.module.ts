import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LstSocialsComponent } from './lst-socials.component';
import { SvgLinkedinModule } from '../../svgs/social/svg-linkedin/svg-linkedin.module';
import { SvgBitbucketModule } from '../../svgs/social/svg-bitbucket/svg-bitbucket.module';
import { SvgGithubModule } from '../../svgs/social/svg-github/svg-github.module';
import { SvgFacebookModule } from '../../svgs/social/svg-facebook/svg-facebook.module';
import { SvgInstagramModule } from '../../svgs/social/svg-instagram/svg-instagram.module';

@NgModule({
  imports: [
    CommonModule,
    SvgFacebookModule,
    SvgInstagramModule,
    SvgGithubModule,
    SvgBitbucketModule,
    SvgLinkedinModule,
  ],
  exports: [LstSocialsComponent],
  declarations: [LstSocialsComponent],
})
export class LstSocialsModule {}
