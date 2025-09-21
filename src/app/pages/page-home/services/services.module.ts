import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent} from './services.component';
import { ServiceModule } from './service/service.module';

const components = [
  ServiceModule
]
@NgModule({
  imports: [CommonModule, ...components],
  exports: [ServicesComponent],
  declarations: [ServicesComponent],
})
export class ServicesModule {}
