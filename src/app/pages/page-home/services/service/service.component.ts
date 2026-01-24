import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IServiceModel } from 'src/app/models/home';

const modules = [CommonModule];

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  imports: [...modules],
  standalone: true
})
export class ServiceComponent {
  @Input() item: IServiceModel | undefined;

  constructor(
  ) { }
}
