import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IUiTxtHomeModel } from 'src/app/models/uiTxt';
import { LanguageStore } from 'src/app/store/language.store';

const modules = [CommonModule];

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [...modules],
  standalone: true
})
export class BannerComponent implements OnInit {
  readonly languageStore = inject(LanguageStore);
  public uiText: IUiTxtHomeModel = this.languageStore.getUiTxt().homeTxt;

  public text: string = '';

  public typeSpeed: number = 100; // ms per character
  public deleteSpeed: number = 50; // ms per character
  public delayBetween: number = 2000; // pause before deleting

  public displayedText: string = '';
  private phraseIndex: number = 0;
  private charIndex: number = 0;
  private deleting: boolean = false;

  constructor() { }

  ngOnInit() {
    this.typeLoop();
  }

  private typeLoop(): void {
    const currentPhrase = this.languageStore.getUiTxt().homeTxt.bannerPhrases[this.phraseIndex];

    if (!this.deleting) {
      // typing
      if (this.charIndex < currentPhrase.length) {
        this.displayedText += currentPhrase.charAt(this.charIndex);
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
        this.displayedText = currentPhrase.substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.typeLoop(), this.deleteSpeed);
      } else {
        // move to next phrase
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.languageStore.getUiTxt().homeTxt.bannerPhrases.length;
        setTimeout(() => this.typeLoop(), this.typeSpeed);
      }
    }
  }
}
