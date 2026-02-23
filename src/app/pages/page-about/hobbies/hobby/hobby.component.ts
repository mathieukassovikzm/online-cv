import { CommonModule } from '@angular/common';
import { afterNextRender, Component, ElementRef, inject, input, Renderer2, ViewChild } from '@angular/core';
import { IHobbyModel } from 'src/app/models/about';
import { TypeHobbyEnum } from 'src/app/models/enum';
import { SvgEducationComponent } from 'src/app/shared/svgs/ui/svg-education/svg-education.component';
import { SvgMedalComponent } from 'src/app/shared/svgs/ui/svg-medal/svg-medal.component';
import { SvgWorkComponent } from 'src/app/shared/svgs/ui/svg-work/svg-work.component';

const modules = [CommonModule];
const svgs = [SvgEducationComponent, SvgMedalComponent, SvgWorkComponent];

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
  imports: [...modules, ...svgs],
  standalone: true
})
export class HobbyComponent {
  private renderer = inject(Renderer2);

  readonly item = input<IHobbyModel>();

  @ViewChild('divCardInfos') divCardInfos?: ElementRef<HTMLInputElement>;
  @ViewChild('divDescription') divDescription?: ElementRef<HTMLInputElement>;

  typeCreativity = TypeHobbyEnum.Creativity;
  typeSport = TypeHobbyEnum.Sport;
  typeOther = TypeHobbyEnum.Other;

  constructor() {
    // Use afterNextRender for zoneless change detection compatibility
    afterNextRender(() => {
      this.setupMediaQueryLogic();
    });
  }

  private setupMediaQueryLogic(): void {
    const mediaQuery = window.matchMedia('(min-width: 1445px)');

    if (mediaQuery.matches) {
      this.calculateTransformY();
    } else {
      this.renderer.setStyle(this.divCardInfos?.nativeElement, 'transform', `translateY(-7px)`);
    }

    // Optional: re-run if the user resizes the window
    mediaQuery.addEventListener('change', (event) => {
      if (event.matches) {
        this.calculateTransformY();
      }
      else {
        this.renderer.setStyle(this.divCardInfos?.nativeElement, 'transform', `translateY(-7px)`);
      }
    });
  }

  private calculateTransformY(): void {
    const dscHeight = this.divDescription?.nativeElement?.getBoundingClientRect()?.height;
    const element = this.divCardInfos?.nativeElement;
    if (element && dscHeight) {
      const styles = window.getComputedStyle(element);
      const paddingBottomString = styles.paddingBottom;
      const paddingBottom = paddingBottomString?.replace('px', '');
      const translateY = Number(paddingBottom) + dscHeight;
      // Manipulate via Renderer2
      this.renderer.setStyle(this.divCardInfos?.nativeElement, 'transform', `translateY(${translateY}px)`);
    }
  }
}
