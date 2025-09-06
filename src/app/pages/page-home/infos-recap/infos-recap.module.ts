import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosRecapComponent } from './infos-recap.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [InfosRecapComponent],
  declarations: [InfosRecapComponent],
})
export class InfosRecapModule {}
