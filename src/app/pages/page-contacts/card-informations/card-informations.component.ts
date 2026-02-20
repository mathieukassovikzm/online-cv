import { Component, computed, inject } from '@angular/core';
import { ContactStore } from 'src/app/store/contact.store';
import { UiStore } from 'src/app/store/ui.store';


@Component({
  selector: 'app-card-informations',
  templateUrl: './card-informations.component.html',
  styleUrls: ['./card-informations.component.scss'],
  imports: [],
  standalone: true
})
export class CardInformationsComponent {
  readonly uiStore = inject(UiStore);
  readonly contactStore = inject(ContactStore);

  public uiText = computed(() => this.uiStore.getUiTxt().contactTxt);
  public contactInfos = this.contactStore.getContactTxt;

  constructor() { }
}
