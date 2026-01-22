import { Component, computed, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, tap } from 'rxjs';
import { IUiTxtNavModel } from 'src/app/models/uiTxt';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: false
})
export class NavigationComponent implements OnInit {
  public itemMenuActif = 1;
  public pageActiveName = '';

  private sub = new Subscription();
  // public photo = require('./../../../../assets/images/PhotoCv.jpg');

  public sUiText: Signal<IUiTxtNavModel> = computed(() => {
    return this.uiService.getUiTxt()()?.navTxt;
  });
  public language = this.uiService.getUiLanguage();

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
        const pageName = this.route?.root?.firstChild?.snapshot.data['pageName'];
        this.pageActiveName = this.uiService.getUiPageName(pageName)();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  switchMenu(idDtemClicked: number): void {
    this.itemMenuActif = idDtemClicked;
  }
}
