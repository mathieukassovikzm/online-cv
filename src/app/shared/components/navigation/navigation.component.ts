import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, tap } from 'rxjs';
import { CodeLanguageEnum } from 'src/app/models/enum';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public itemMenuActif = 1;
  public pageActiveName = '';

  private sub = new Subscription();
  // public photo = require('./../../../../assets/images/PhotoCv.jpg');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        // On filtre que sur les NavigationEnd pour ne pas être full spammé par le router
        filter((event) => event instanceof NavigationEnd),
        // A la fin de la naviagation on veut automatiquement fermé l'app-curtain
        tap(() => this.uiService.closeNav())
      )
      .forEach(() => {
        this.pageActiveName =
          this.route?.root?.firstChild?.snapshot.data['displayName'];
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  switchMenu(idDtemClicked: number): void {
    this.itemMenuActif = idDtemClicked;
  }

  switchToFrench(): void {
    this.uiService.setUiLanguage(CodeLanguageEnum.FR);
  }

  switchToEnglish(): void {
    this.uiService.setUiLanguage(CodeLanguageEnum.EN);
  }

  switchToSpanish(): void {
    this.uiService.setUiLanguage(CodeLanguageEnum.ES);
  }
}
