import { Component, OnInit } from '@angular/core';
import { CodeLanguageEnum, ILanguageModel } from 'src/app/models/language';
import { InfosService } from 'src/app/services/infos.service';

@Component({
  selector: 'app-infos-languages',
  templateUrl: './infos-languages.component.html',
  styleUrls: ['./infos-languages.component.scss']
})
export class InfosLanguagesComponent implements OnInit {

  public lstLanguages = <ILanguageModel[]>[];
  public codeFr = CodeLanguageEnum.FR;
  public codeEn = CodeLanguageEnum.EN;
  public codeEs = CodeLanguageEnum.ES;


  constructor(private infosService: InfosService) { }

  ngOnInit() {
    this.lstLanguages = this.infosService.getLanguages();
  }

}
