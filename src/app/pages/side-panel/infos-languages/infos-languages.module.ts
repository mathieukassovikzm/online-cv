import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosLanguagesComponent } from './infos-languages.component';
import { SvgEnModule } from 'src/app/shared/svgs/skills/language/svg-en/svg-en.module';
import { SvgEsModule } from 'src/app/shared/svgs/skills/language/svg-es/svg-es.module';
import { SvgFrModule } from 'src/app/shared/svgs/skills/language/svg-fr/svg-fr.module';

@NgModule({
  imports: [
    SvgFrModule,
    SvgEnModule,
    SvgEsModule,
    CommonModule
  ],
  exports: [InfosLanguagesComponent],
  declarations: [InfosLanguagesComponent]
})
export class InfosLanguagesModule { }
