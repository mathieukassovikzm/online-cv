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
import { SvgSqlOracleModule } from 'src/app/shared/svgs/dev-bdd/svg-sql-oracle/svg-sql-oracle.module';
import { SvgPremiereProModule } from 'src/app/shared/svgs/adobe/svg-premiere-pro/svg-premiere-pro.module';
import { SvgAfterEffectsComponent } from 'src/app/shared/svgs/adobe/svg-after-effects/svg-after-effects.component';
import { SvgIllustratorModule } from 'src/app/shared/svgs/adobe/svg-illustrator/svg-illustrator.module';
import { SvgLightroomModule } from 'src/app/shared/svgs/adobe/svg-lightroom/svg-lightroom.module';
import { SvgPhotoshopModule } from 'src/app/shared/svgs/adobe/svg-photoshop/svg-photoshop.module';
import { SvgDiviModule } from 'src/app/shared/svgs/dev-front/svg-divi/svg-divi.module';
import { SvgWordpressModule } from 'src/app/shared/svgs/dev-front/svg-wordpress/svg-wordpress.module';
import { SvgGitModule } from 'src/app/shared/svgs/dev-ops/svg-git/svg-git.module';
import { SvgSassModule } from 'src/app/shared/svgs/dev-front/svg-sass/svg-sass.module';
import { SvgCPlusPlusModule } from 'src/app/shared/svgs/dev-back/svg-c-plus-plus/svg-c-plus-plus.module';
import { SvgJavaModule } from 'src/app/shared/svgs/dev-back/svg-java/svg-java.module';
import { SvgSourcetreeModule } from 'src/app/shared/svgs/tool/svg-sourcetree/svg-sourcetree.module';
import { SvgVisualStudioCodeModule } from 'src/app/shared/svgs/tool/svg-visual-studio-code/svg-visual-studio-code.module';
import { SvgVisualStudioModule } from 'src/app/shared/svgs/tool/svg-visual-studio/svg-visual-studio.module';
import { SvgAtomModule } from 'src/app/shared/svgs/tool/svg-atom/svg-atom.module';
import { SvgGitkrakenModule } from 'src/app/shared/svgs/tool/svg-gitkraken/svg-gitkraken.module';
import { SvgMysqlModule } from 'src/app/shared/svgs/dev-bdd/svg-mysql/svg-mysql.module';
import { SvgFrModule } from 'src/app/shared/svgs/language/svg-fr/svg-fr.module';
import { SvgEnModule } from 'src/app/shared/svgs/language/svg-en/svg-en.module';
import { SvgEsModule } from 'src/app/shared/svgs/language/svg-es/svg-es.module';

@NgModule({
  imports: [
    CommonModule,

    SvgAngularModule,
    SvgVuejsModule,
    SvgBlazorModule,
    SvgCompassModule,
    SvgHtmlModule,
    SvgCssModule,
    SvgSassModule,
    SvgTypescriptModule,
    SvgJavascriptModule,
    SvgDiviModule,
    SvgWordpressModule,

    SvgCSharpModule,
    SvgCPlusPlusModule,
    SvgJavaModule,

    SvgSqlOracleModule,
    SvgMysqlModule,

    SvgGitModule,

    SvgVisualStudioModule,
    SvgVisualStudioCodeModule,
    SvgGitkrakenModule,
    SvgAtomModule,
    SvgSourcetreeModule,

    SvgPremiereProModule,
    SvgAfterEffectsModule,
    SvgIllustratorModule,
    SvgLightroomModule,
    SvgPhotoshopModule,

    SvgFrModule,
    SvgEnModule,
    SvgEsModule
  ],
  exports: [SkillComponent],
  declarations: [SkillComponent]
})
export class SkillModule { }
