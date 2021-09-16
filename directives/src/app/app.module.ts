import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuraldirectivesModule } from './structuraldirectives/structuraldirectives.module';
import { AttributedirectivesModule } from './attributedirectives/attributedirectives.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StructuraldirectivesModule,
    AttributedirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
