import { AfterViewInit, Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { IHobbyModel } from 'src/app/models/about';
import { TypeHobbyEnum } from 'src/app/models/enum';
import { UiService } from 'src/app/services/ui.service';

@Component({
    selector: 'app-hobby',
    templateUrl: './hobby.component.html',
    styleUrls: ['./hobby.component.scss'],
    standalone: false
})
export class HobbyComponent implements AfterViewInit {
  @Input() item: IHobbyModel | undefined;

  @ViewChild('divCardInfos') divCardInfos?: ElementRef<HTMLInputElement>;
  @ViewChild('divDescription') divDescription?: ElementRef<HTMLInputElement>;

  typeCreativity = TypeHobbyEnum.Creativity;
  typeSport = TypeHobbyEnum.Sport;
  typeOther = TypeHobbyEnum.Other;

  constructor(
    private uiService: UiService,
    private renderer: Renderer2,
    private zone: NgZone
  ) { }

  ngAfterViewInit() {
    const mediaQuery = window.matchMedia('(min-width: 1445px)');

    this.zone.onStable.pipe(take(1)).subscribe(() => {
      if (mediaQuery.matches) {
        this.calculateTransformY();
      } else {
        this.renderer.setStyle(this.divCardInfos?.nativeElement, 'transform', `translateY(0px)`);
      }

      // Optional: re-run if the user resizes the window
      mediaQuery.addEventListener('change', (event) => {
        if (event.matches) {
          this.calculateTransformY();
        }
        else {
          this.renderer.setStyle(this.divCardInfos?.nativeElement, 'transform', `translateY(0px)`);
        }
      });
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
