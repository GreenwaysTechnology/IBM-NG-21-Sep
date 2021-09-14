//AppModule - to have other objects
// contains injector configuration to create object

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BodyComponent } from "./body.component";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent,FooterComponent,BodyComponent], //view objects - Component,Directive,Pipes
  imports: [BrowserModule], //submodules -from angular or custom sub modules
  providers: [], // services,
  bootstrap: [AppComponent]
})
export class AppModule { }