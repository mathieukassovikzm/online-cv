import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContactsComponent } from './page-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: PageContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageContactsRoutingModule {}
