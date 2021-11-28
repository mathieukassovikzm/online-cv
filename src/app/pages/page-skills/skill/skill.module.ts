import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';
import { SvgAfterEffectsModule } from 'src/app/shared/svgs/adobe/svg-after-effects/svg-after-effects.module';
import { SvgAngularModule } from 'src/app/shared/svgs/dev-front/svg-angular/svg-angular.module';
import { SvgVuejsModule } from 'src/app/shared/svgs/dev-front/svg-vuejs/svg-vuejs.module';
import { SvgBlazorModule } from 'src/app/shared/svgs/dev-front/svg-blazor/svg-blazor.module';
import { SvgCompassModule } from 'src/app/shared/svgs/dev-front/svg-compass/svg-compass.module';
import { SvgHtmlModule } from 'src/app/shared/svgs/dev-front/svg-html/svg-html.module';
import { SvgCssModule } from 'src/app/shared/svgs/dev-front/svg-css/svg-css.module';
import { SvgTypescriptModule } from 'src/app/shared/svgs/dev-front/svg-typescript/svg-typescript.module';
import { SvgJavascriptModule } from 'src/app/shared/svgs/dev-front/svg-javascript/svg-javascript.module';
import { SvgCSharpModule } from 'src/app/shared/svgs/dev-back/svg-c-sharp/svg-c-sharp.module';
import { SvgSqlOracleModule } from 'src/app/shared/svgs/dev-back/svg-sql-oracle/svg-sql-oracle.module';
import { SvgPremiereProModule } from 'src/app/shared/svgs/adobe/svg-premiere-pro/svg-premiere-pro.module';
import { SvgAfterEffectsComponent } from 'src/app/shared/svgs/adobe/svg-after-effects/svg-after-effects.component';
import { SvgIllustratorModule } from 'src/app/shared/svgs/adobe/svg-illustrator/svg-illustrator.module';
import { SvgLightroomModule } from 'src/app/shared/svgs/adobe/svg-lightroom/svg-lightroom.module';
import { SvgPhotoshopModule } from 'src/app/shared/svgs/adobe/svg-photoshop/svg-photoshop.module';

@NgModule({
  imports: [
    CommonModule,
    SvgAfterEffectsModule,

    SvgAngularModule,
    SvgVuejsModule,
    SvgBlazorModule,
    SvgCompassModule,
    SvgHtmlModule,
    SvgCssModule,
    SvgTypescriptModule,
    SvgJavascriptModule,

    SvgCSharpModule,
    SvgSqlOracleModule,

    SvgPremiereProModule,
    SvgAfterEffectsModule,
    SvgIllustratorModule,
    SvgLightroomModule,
    SvgPhotoshopModule,

  ],
  exports: [SkillComponent],
  declarations: [SkillComponent]
})
export class SkillModule { }
