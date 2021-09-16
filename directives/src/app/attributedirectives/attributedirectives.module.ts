import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { DirectivetestComponent } from './directivetest.component';



@NgModule({
  declarations: [
    HighlightDirective,
    DirectivetestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    DirectivetestComponent
  ]
})
export class AttributedirectivesModule { }
