import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForloopComponent } from './forloop.component';
import { IfelseComponent } from './ifelse.component';
import { SwitchcaseComponent } from './switchcase.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ForloopComponent,
    IfelseComponent,
    SwitchcaseComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    ForloopComponent,
    IfelseComponent,
    SwitchcaseComponent
  ]
})
export class StructuraldirectivesModule { }
