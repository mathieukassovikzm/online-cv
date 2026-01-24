import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { UiStore } from 'src/app/store/ui.store';

@Component({
  selector: 'app-btn-dark-mode',
  templateUrl: './btn-dark-mode.component.html',
  styleUrls: ['./btn-dark-mode.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class BtnDarkModeComponent implements OnInit {
  @HostBinding('class') class = 'component-btn-dark-mode';

  readonly uiStore = inject(UiStore);

  constructor() { }

  ngOnInit() { }

  btnClicked(): void {
  }
}
