import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { AttributebindingModule } from './attributebinding/attributebinding.module';
import { PropertybindingModule } from './propertybinding/propertybinding.module';
import { EventbindingModule } from './eventbinding/eventbinding.module';
import { CssbindingModule } from './cssbinding/cssbinding.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    AttributebindingModule,
    PropertybindingModule,
    EventbindingModule,
    CssbindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
