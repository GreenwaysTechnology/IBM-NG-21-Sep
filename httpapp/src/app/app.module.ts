import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpapiModule } from './httpapi/httpapi.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpapiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
