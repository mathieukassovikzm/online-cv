import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: false
})
export class BannerComponent implements OnInit {
  public text: string = '';
  public phrases = ['web applications', 'backend applications'];
  public typeSpeed: number = 100; // ms per character
  public deleteSpeed: number = 50; // ms per character
  public delayBetween: number = 2000; // pause before deleting

  public displayedText: string = '';
  private phraseIndex: number = 0;
  private charIndex: number = 0;
  private deleting: boolean = false;

  constructor() {}

  ngOnInit() {
    this.typeLoop();
  }

  private typeLoop(): void {
    const currentPhrase = this.phrases[this.phraseIndex];

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
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        setTimeout(() => this.typeLoop(), this.typeSpeed);
      }
    }
  }
}
