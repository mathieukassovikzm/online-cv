import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ISkillModel } from 'src/app/models/infos';
import { SvgAfterEffectsComponent } from 'src/app/shared/svgs/skills/adobe/svg-after-effects/svg-after-effects.component';
import { SvgIllustratorComponent } from 'src/app/shared/svgs/skills/adobe/svg-illustrator/svg-illustrator.component';
import { SvgLightroomComponent } from 'src/app/shared/svgs/skills/adobe/svg-lightroom/svg-lightroom.component';
import { SvgPhotoshopComponent } from 'src/app/shared/svgs/skills/adobe/svg-photoshop/svg-photoshop.component';
import { SvgPremiereProComponent } from 'src/app/shared/svgs/skills/adobe/svg-premiere-pro/svg-premiere-pro.component';
import { SvgCPlusPlusComponent } from 'src/app/shared/svgs/skills/dev-back/svg-c-plus-plus/svg-c-plus-plus.component';
import { SvgCSharpComponent } from 'src/app/shared/svgs/skills/dev-back/svg-c-sharp/svg-c-sharp.component';
import { SvgJavaComponent } from 'src/app/shared/svgs/skills/dev-back/svg-java/svg-java.component';
import { SvgMysqlComponent } from 'src/app/shared/svgs/skills/dev-bdd/svg-mysql/svg-mysql.component';
import { SvgSqlOracleComponent } from 'src/app/shared/svgs/skills/dev-bdd/svg-sql-oracle/svg-sql-oracle.component';
import { SvgAngularComponent } from 'src/app/shared/svgs/skills/dev-front/svg-angular/svg-angular.component';
import { SvgBlazorComponent } from 'src/app/shared/svgs/skills/dev-front/svg-blazor/svg-blazor.component';
import { SvgCssComponent } from 'src/app/shared/svgs/skills/dev-front/svg-css/svg-css.component';
import { SvgDiviComponent } from 'src/app/shared/svgs/skills/dev-front/svg-divi/svg-divi.component';
import { SvgHtmlComponent } from 'src/app/shared/svgs/skills/dev-front/svg-html/svg-html.component';
import { SvgJavascriptComponent } from 'src/app/shared/svgs/skills/dev-front/svg-javascript/svg-javascript.component';
import { SvgSassComponent } from 'src/app/shared/svgs/skills/dev-front/svg-sass/svg-sass.component';
import { SvgTypescriptComponent } from 'src/app/shared/svgs/skills/dev-front/svg-typescript/svg-typescript.component';
import { SvgVuejsComponent } from 'src/app/shared/svgs/skills/dev-front/svg-vuejs/svg-vuejs.component';
import { SvgWordpressComponent } from 'src/app/shared/svgs/skills/dev-front/svg-wordpress/svg-wordpress.component';
import { SvgEnComponent } from 'src/app/shared/svgs/skills/language/svg-en/svg-en.component';
import { SvgEsComponent } from 'src/app/shared/svgs/skills/language/svg-es/svg-es.component';
import { SvgFrComponent } from 'src/app/shared/svgs/skills/language/svg-fr/svg-fr.component';
import { SvgAtomComponent } from 'src/app/shared/svgs/skills/tool/svg-atom/svg-atom.component';
import { SvgGitkrakenComponent } from 'src/app/shared/svgs/skills/tool/svg-gitkraken/svg-gitkraken.component';
import { SvgSourcetreeComponent } from 'src/app/shared/svgs/skills/tool/svg-sourcetree/svg-sourcetree.component';
import { SvgVisualStudioCodeComponent } from 'src/app/shared/svgs/skills/tool/svg-visual-studio-code/svg-visual-studio-code.component';
import { SvgVisualStudioComponent } from 'src/app/shared/svgs/skills/tool/svg-visual-studio/svg-visual-studio.component';
import { SvgGitComponent } from 'src/app/shared/svgs/skills/versionning/svg-git/svg-git.component';
import { SvgSvnComponent } from 'src/app/shared/svgs/skills/versionning/svg-svn/svg-svn.component';

const modules = [CommonModule];
const svgs = [
  SvgAngularComponent,
  SvgVuejsComponent,
  SvgBlazorComponent,
  SvgHtmlComponent,
  SvgCssComponent,
  SvgSassComponent,
  SvgTypescriptComponent,
  SvgJavascriptComponent,
  SvgDiviComponent,
  SvgWordpressComponent,

  SvgCSharpComponent,
  SvgCPlusPlusComponent,
  SvgJavaComponent,

  SvgSqlOracleComponent,
  SvgMysqlComponent,

  SvgGitComponent,
  SvgSvnComponent,

  SvgVisualStudioComponent,
  SvgVisualStudioCodeComponent,
  SvgGitkrakenComponent,
  SvgAtomComponent,
  SvgSourcetreeComponent,
  SvgPremiereProComponent,
  SvgAfterEffectsComponent,
  SvgIllustratorComponent,
  SvgLightroomComponent,
  SvgPhotoshopComponent,

  SvgFrComponent,
  SvgEnComponent,
  SvgEsComponent
];

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  imports: [...modules, ...svgs],
  standalone: true
})
export class SkillComponent {
  readonly skill = input(<ISkillModel>{});

  constructor() { }

  getBarWidth(): string {
    return `stroke-dashoffset:${100 - this.skill().power}`;
  }
}
