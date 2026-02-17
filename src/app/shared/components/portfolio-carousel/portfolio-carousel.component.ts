import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output, signal } from '@angular/core';
import { IProjectModel } from 'src/app/models/project';

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class PortfolioCarouselComponent implements OnInit {
  @HostBinding('class') class = 'portfolio-carousel-component';
  @Input() projects: IProjectModel[] = [];
  @Input() currentItemOpen: IProjectModel | undefined;
  @Output() close = new EventEmitter<void>();

  currentIndex = signal(0);

  constructor() { }

  ngOnInit(): void {
    const findIndex = this.projects.findIndex(p => p.id === this.currentItemOpen?.id);
    this.currentIndex.set(findIndex !== -1 ? findIndex : 0);
  }

  get currentProject(): IProjectModel | undefined {
    return this.projects[this.currentIndex()];
  }

  previousProject(): void {
    const newIndex = this.currentIndex() === 0
      ? this.projects.length - 1
      : this.currentIndex() - 1;
    this.currentIndex.set(newIndex);
  }

  nextProject(): void {
    const newIndex = (this.currentIndex() + 1) % this.projects.length;
    this.currentIndex.set(newIndex);
  }

  goToProject(index: number): void {
    if (index >= 0 && index < this.projects.length) {
      this.currentIndex.set(index);
    }
  }

  closeCarousel(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeCarousel();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        this.closeCarousel();
        break;
      case 'ArrowLeft':
        this.previousProject();
        break;
      case 'ArrowRight':
        this.nextProject();
        break;
    }
  }
}