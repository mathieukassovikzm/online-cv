import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesEnum } from './models/enum';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: { pageName: PagesEnum.HOME },
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },
  {
    path: 'about',
    data: { pageName: PagesEnum.ABOUT },
    loadChildren: () =>
      import('./pages/page-about/page-about.module').then(
        (m) => m.PageAboutModule
      ),
  },
  {
    path: 'projets',
    data: { pageName: PagesEnum.PROJECTS },
    loadChildren: () =>
      import('./pages/page-projects/page-projects.module').then(
        (m) => m.PageProjectsModule
      ),
  },
  {
    path: 'contacts',
    data: { pageName: PagesEnum.CONTACTS },
    loadChildren: () =>
      import('./pages/page-contacts/page-contacts.module').then(
        (m) => m.PageContactsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
