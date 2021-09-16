import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter.component';
import { GreeterService } from './greeter.service';



@NgModule({
  declarations: [
    GreeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterComponent
  ],
//  providers: [GreeterService]
})
export class GreeterModule { }
