import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeStore } from 'src/app/store/home.store';

const modules = [CommonModule, FormsModule];

@Component({
  selector: 'app-lst-enterprises',
  templateUrl: './lst-enterprises.component.html',
  styleUrls: ['./lst-enterprises.component.scss'],
  imports: [...modules],
  standalone: true
})
export class LstEntreprisesComponent {
  readonly homeStore = inject(HomeStore);

  public homeText = computed(() => this.homeStore.getHomeTxt());

  constructor() { }
}
