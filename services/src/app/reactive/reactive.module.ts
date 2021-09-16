import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberreactiveComponent } from './numberreactive.component';
import { ArrayreactiveComponent } from './arrayreactive.component';
import { ErrorhandlingComponent } from './errorhandling.component';



@NgModule({
  declarations: [
    NumberreactiveComponent,
    ArrayreactiveComponent,
    ErrorhandlingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberreactiveComponent,
    ArrayreactiveComponent,
    ErrorhandlingComponent
  ]
})
export class ReactiveModule { }
