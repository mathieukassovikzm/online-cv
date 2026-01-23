import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, tap } from 'rxjs';
import { LanguageStore } from 'src/app/store/language.store';
import { UiStore } from 'src/app/store/ui.store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: false
})
export class NavigationComponent implements OnInit {
  readonly languageStore = inject(LanguageStore);
  readonly uiStore = inject(UiStore);

  public itemMenuActif = 1;
  public pageActiveName = '';

  private sub = new Subscription();
  // public photo = require('./../../../../assets/images/PhotoCv.jpg');

  public language = this.languageStore.uiLanguage;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        // On filtre que sur les NavigationEnd pour ne pas être full spammé par le router
        filter((event) => event instanceof NavigationEnd),
        // A la fin de la naviagation on veut automatiquement fermé l'app-curtain
        tap(() => this.uiStore.closeNav())
      )
      .forEach(() => {
        const pageName = this.route?.root?.firstChild?.snapshot.data['pageName'];
        this.pageActiveName = this.languageStore.getUiPageName(pageName);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  switchMenu(idDtemClicked: number): void {
    this.itemMenuActif = idDtemClicked;
  }
}
