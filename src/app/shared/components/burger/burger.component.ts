import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { UiStore } from 'src/app/store/ui.store';

const modules = [CommonModule];

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  imports: [...modules],
  standalone: true
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
