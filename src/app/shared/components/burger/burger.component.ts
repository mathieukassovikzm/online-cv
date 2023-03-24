import { Component, HostBinding, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent implements OnInit {
  @HostBinding('class') class = 'component-burger';
  constructor(public uiService: UiService) {}

  ngOnInit() {}

  burgerClicked(): void {
    this.uiService.toggleNav();
  }

  isOpen(): boolean {
    return this.uiService.getIsNavOpen();
  }
}
