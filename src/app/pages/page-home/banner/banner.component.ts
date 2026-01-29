import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IUiTxtHomeModel } from 'src/app/models/uiTxt';
import { UiStore } from 'src/app/store/ui.store';

const modules = [CommonModule];

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [...modules],
  standalone: true
})
export class BannerComponent implements OnInit {
  readonly uiStore = inject(UiStore);

  public uiText: IUiTxtHomeModel = this.uiStore.getUiTxt().homeTxt;

  public text: string = '';

  public typeSpeed: number = 100; // ms per character
  public deleteSpeed: number = 50; // ms per character
  public delayBetween: number = 2000; // pause before deleting

  public displayedText = signal('');
  private phraseIndex: number = 0;
  private charIndex: number = 0;
  private deleting: boolean = false;

  constructor() { }

  ngOnInit() {
    this.typeLoop();
  }

  private typeLoop(): void {
    const currentPhrase = this.uiStore.getUiTxt().homeTxt.bannerPhrases[this.phraseIndex];

    if (!this.deleting) {
      // typing
      if (this.charIndex < currentPhrase.length) {
        this.displayedText.set(this.displayedText() + currentPhrase.charAt(this.charIndex));
        this.charIndex++;
        setTimeout(() => this.typeLoop(), this.typeSpeed);
      } else {
        // full word typed → wait before deleting
        this.deleting = true;
        setTimeout(() => this.typeLoop(), this.delayBetween);
      }
    } else {
      // deleting
      if (this.charIndex > 0) {
        this.displayedText.set(currentPhrase.substring(0, this.charIndex - 1));
        this.charIndex--;
        setTimeout(() => this.typeLoop(), this.deleteSpeed);
      } else {
        // move to next phrase
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.uiStore.getUiTxt().homeTxt.bannerPhrases.length;
        setTimeout(() => this.typeLoop(), this.typeSpeed);
      }
    }
  }
}
