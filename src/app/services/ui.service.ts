import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isNavOpen = false;
  constructor() {}

  toggleNavOpen(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
