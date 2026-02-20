import { Component } from '@angular/core';
import { CardInformationsComponent } from './card-informations/card-informations.component';
import { ContactFormComponent } from './contact-form/contact-form';

@Component({
  selector: 'app-page-contacts',
  templateUrl: './page-contacts.component.html',
  styleUrls: ['./page-contacts.component.scss'],
  imports: [CardInformationsComponent, ContactFormComponent],
  standalone: true
})
export class PageContactsComponent {
  constructor() { }
}
