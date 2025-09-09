import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LstEntreprisesComponent } from './lst-enterprises.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [LstEntreprisesComponent],
  declarations: [LstEntreprisesComponent],
})
export class LstEntreprisesModule {}
