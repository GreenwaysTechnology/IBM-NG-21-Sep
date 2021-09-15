import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalfractionPipe } from './decimalfraction.pipe';



@NgModule({
  declarations: [
    DecimalfractionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DecimalfractionPipe
  ]
})
export class UtilsModule { }
