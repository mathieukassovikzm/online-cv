import { Component, computed, OnInit, Signal } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: false
})
export class BannerComponent implements OnInit {
  public text: string = '';

  public sBannerTxt: Signal<string> = computed(() => {
    return this.uiService.getUiTxt()().homeTxt.bannerTxt;
  });
  public sBannerPhrases: Signal<string[]> = computed(() => {
    return this.uiService.getUiTxt()()?.homeTxt.bannerPhrases;
  });

  public typeSpeed: number = 100; // ms per character
  public deleteSpeed: number = 50; // ms per character
  public delayBetween: number = 2000; // pause before deleting

  public displayedText: string = '';
  private phraseIndex: number = 0;
  private charIndex: number = 0;
  private deleting: boolean = false;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.typeLoop();
  }

  private typeLoop(): void {
    const currentPhrase = this.sBannerPhrases()[this.phraseIndex];

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
        this.phraseIndex = (this.phraseIndex + 1) % this.sBannerPhrases().length;
        setTimeout(() => this.typeLoop(), this.typeSpeed);
      }
    }
  }
}
