import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { UiStore } from 'src/app/store/ui.store';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  standalone: false
})
export class BurgerComponent implements OnInit {
  @HostBinding('class') class = 'component-burger';

  readonly uiStore = inject(UiStore);

  constructor() { }

  ngOnInit() { }

  burgerClicked(): void {
    this.uiStore.toggleNav();
  }
}
