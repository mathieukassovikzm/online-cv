import { Routes } from '@angular/router';
import { PagesEnum } from './models/enum';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: { pageName: PagesEnum.HOME },
    loadComponent: () =>
      import('./pages/page-home/page-home.component').then(
        (m) => m.PageHomeComponent
      ),
  },
  {
    path: 'about',
    data: { pageName: PagesEnum.ABOUT },
    loadComponent: () =>
      import('./pages/page-about/page-about.component').then(
        (m) => m.PageAboutComponent
      ),
  },
  {
    path: 'projets',
    data: { pageName: PagesEnum.PROJECTS },
    loadComponent: () =>
      import('./pages/page-projects/page-projects.component').then(
        (m) => m.PageProjectsComponent
      ),
  },
  {
    path: 'contacts',
    data: { pageName: PagesEnum.CONTACTS },
    loadComponent: () =>
      import('./pages/page-contacts/page-contacts.component').then(
        (m) => m.PageContactsComponent
      ),
  },
];