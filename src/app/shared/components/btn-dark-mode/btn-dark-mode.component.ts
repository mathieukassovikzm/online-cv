
import { Component, HostBinding, inject } from '@angular/core';
import { UiStore } from 'src/app/store/ui.store';

@Component({
  selector: 'app-btn-dark-mode',
  templateUrl: './btn-dark-mode.component.html',
  styleUrls: ['./btn-dark-mode.component.scss'],
  imports: [],
  standalone: true
})
export class BtnDarkModeComponent {
  @HostBinding('class') class = 'component-btn-dark-mode';

  readonly uiStore = inject(UiStore);
  isChecked = !this.uiStore.darkMode();

  constructor() { }

  btnClicked(): void {
    this.uiStore.toggleDarkMode();
  }
}
