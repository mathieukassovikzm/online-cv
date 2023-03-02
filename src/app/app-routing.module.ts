import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/page-about/page-about.module').then(
        (m) => m.PageAboutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
