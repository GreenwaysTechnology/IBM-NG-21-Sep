import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cstreamsub1Component } from './cstreamsub1.component';
import { Cstreamsub2Component } from './cstreamsub2.component';
import { Cstreamsub3Component } from './cstreamsub3.component';
import { Hotstreamsub1Component } from './hotstreamsub1.component';
import { Hotstreamsub2Component } from './hotstreamsub2.component';
import { Hotstreamsub3Component } from './hotstreamsub3.component';
import { SubjectoneComponent } from './subjectone.component';
import { SubjecttwoComponent } from './subjecttwo.component';



@NgModule({
  declarations: [
    Cstreamsub1Component,
    Cstreamsub2Component,
    Cstreamsub3Component,
    Hotstreamsub1Component,
    Hotstreamsub2Component,
    Hotstreamsub3Component,
    SubjectoneComponent,
    SubjecttwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Cstreamsub1Component,
    Cstreamsub2Component,
    Cstreamsub3Component,
    Hotstreamsub1Component,
    Hotstreamsub2Component,
    Hotstreamsub3Component,
    SubjectoneComponent,
    SubjecttwoComponent
  ]
})
export class BroadcastingModule { }
