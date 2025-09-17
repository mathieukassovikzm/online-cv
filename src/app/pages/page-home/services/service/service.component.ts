import { Component, Input } from '@angular/core';
import { IServiceModel } from 'src/app/models/home';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  @Input() item: IServiceModel | undefined;

  constructor(
  ) { }
}
