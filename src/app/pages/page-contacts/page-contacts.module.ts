import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageContactsRoutingModule } from './page-contacts-routing.module';
import { PageContactsComponent } from './page-contacts.component';

@NgModule({
  imports: [CommonModule, PageContactsRoutingModule],
  exports: [PageContactsComponent],
  declarations: [PageContactsComponent],
})
export class PageContactsModule {}
