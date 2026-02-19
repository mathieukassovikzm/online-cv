import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription, tap } from 'rxjs';
import { LanguageStore } from 'src/app/store/language.store';
import { UiStore } from 'src/app/store/ui.store';
import { SvgInfoComponent } from '../../svgs/ui/svg-info/svg-info.component';
import { SvgPhoneComponent } from '../../svgs/ui/svg-phone/svg-phone.component';
import { SvgWorkComponent } from '../../svgs/ui/svg-work/svg-work.component';
import { BtnDarkModeComponent } from '../btn-dark-mode/btn-dark-mode.component';
import { BurgerComponent } from '../burger/burger.component';

const modules = [CommonModule, RouterModule];
const svgs = [SvgInfoComponent, SvgPhoneComponent, SvgWorkComponent];
const components = [BurgerComponent, BtnDarkModeComponent];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [...modules, ...svgs, ...components],
  standalone: true
})
export class NavigationComponent implements OnInit {
  readonly languageStore = inject(LanguageStore);
  readonly uiStore = inject(UiStore);
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  public itemMenuActif = signal('');
  public pageActiveName = '';

  private sub = new Subscription();
  // public photo = require('./../../../../assets/images/PhotoCv.jpg');

  public language = this.languageStore.uiLanguage;
  public uiText = this.uiStore.getUiTxt();

  public routerLinkHome = "/home";
  public routerLinkAbout = "/about";
  public routerLinkProjects = "/projects";
  public routerLinkContacts = "/contacts";

  constructor() { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        // On filtre que sur les NavigationEnd pour ne pas être full spammé par le router
        filter((event) => event instanceof NavigationEnd),
        // A la fin de la naviagation on veut automatiquement fermé l'app-curtain
        tap(() => this.uiStore.closeNav()),
        tap((res: NavigationEnd) => {
          // Récupération de l'url après la navigation pour mettre à jour le menu actif et le nom de la page active
          let url = res.urlAfterRedirects;
          // On retire de l'url tous les queryParams pour ne pas que ça gène la comparaison
          url = url.split('?')[0];
          this.itemMenuActif.set(url);
        })
      )
      .forEach(() => {
        const pageName = this.route?.root?.firstChild?.snapshot.data['pageName'];
        this.pageActiveName = this.uiStore.getUiPageName(pageName);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
