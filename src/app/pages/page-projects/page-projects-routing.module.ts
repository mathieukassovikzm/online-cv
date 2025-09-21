import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProjectsComponent } from './page-projects.component';

const routes: Routes = [
  {
    path: '',
    component: PageProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageProjectsRoutingModule {}
