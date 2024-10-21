import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { CodeLanguageEnum } from './models/enum';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'online-cv-math';
  private lang: CodeLanguageEnum = CodeLanguageEnum.FR;

  private subscription = new Subscription();

  constructor(
    public uiService: UiService,
    protected http: HttpClient,
  ) {
    this.HealthApi().subscribe()
  }

  ngOnInit() {
    this.lang = this.uiService.getUiLanguage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isOpen(): boolean {
    return this.uiService.getIsNavOpen();
  }

  onLang(): string {
    switch (this.lang) {
      case CodeLanguageEnum.FR:
        return 'lang-fr';
      case CodeLanguageEnum.EN:
        return 'lang-en';
      case CodeLanguageEnum.ES:
        return 'lang-es';
      default:
        return '';
    }
  }


  private HealthApi(): Observable<any> {
    const headers = new HttpHeaders()
    let tmpHeaders = headers
    .set('Accept', '*/*')
    // .set('Content-Type','application/json')
    // .set('Access-Control-Allow-Headers','Content-Type Access-Control-Allow-Origin')
    // .set('Access-Control-Allow-Methods','*')
    // .set('Access-Control-Allow-Origin', 'https://pricing-wa-preprod-01.azurewebsites.net');

    return this.http.get('https://pricing-wa-preprod-01.azurewebsites.net',{ headers: tmpHeaders }).pipe(
      tap(r => console.log(r))
      )
    // return this.http.get('https://pricing-wa-preprod-01.azurewebsites.net/healthApiManager').pipe(
    //   tap(r => console.log(r))
    // )
  }

  curtainClicked(): void {
    this.uiService.toggleNav();
  }
}
