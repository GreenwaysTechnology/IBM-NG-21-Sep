import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';



@NgModule({
  declarations: [
    EventComponent,
    InputComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    EventComponent,
    InputComponent,
    ParentComponent,
    ChildComponent
  ]
})
export class EventbindingModule { }
