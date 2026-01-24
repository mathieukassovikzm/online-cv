import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule, FormsModule];

@Component({
  selector: 'app-lst-enterprises',
  templateUrl: './lst-enterprises.component.html',
  styleUrls: ['./lst-enterprises.component.scss'],
  imports: [...modules],
  standalone: true
})
export class LstEntreprisesComponent {
  readonly languageStore = inject(LanguageStore);

  constructor() { }
}
