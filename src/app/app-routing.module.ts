import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: { displayName: 'Home' },
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },
  {
    path: 'about',
    data: { displayName: 'About' },
    loadChildren: () =>
      import('./pages/page-about/page-about.module').then(
        (m) => m.PageAboutModule
      ),
  },
  {
    path: 'projets',
    data: { displayName: 'Projets' },
    loadChildren: () =>
      import('./pages/page-projects/page-projects.module').then(
        (m) => m.PageProjectsModule
      ),
  },
  {
    path: 'contacts',
    data: { displayName: 'Contacts' },
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
export class AppRoutingModule {}
