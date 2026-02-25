import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { SvgQuoteComponent } from 'src/app/shared/svgs/ui/svg-quote/svg-quote.component';
import { AboutStore } from 'src/app/store/about.store';
import { UiStore } from 'src/app/store/ui.store';

const modules = [CommonModule];
const svgs = [SvgQuoteComponent];

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  imports: [...modules, ...svgs],
  standalone: true
})
export class ExtractComponent {
  readonly aboutStore = inject(AboutStore);
  readonly uiStore = inject(UiStore);

  public uiText = this.uiStore.getUiTxt().aboutTxt;
  public extract = computed(() => this.aboutStore.getAboutTxt().extract || '');

  constructor() { }
}
