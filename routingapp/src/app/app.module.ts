import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MessageComponent } from './message.component';
import { GreeterComponent } from './greeter.component';
import { HaiComponent } from './hai.component';
import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';
import { UserregisterationComponent } from './userregisteration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    MessageComponent,
    GreeterComponent,
    HaiComponent,
    HelloComponent,
    UserregisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    MessageComponent,
    GreeterComponent,
    HaiComponent,
    HelloComponent,
    UserregisterationComponent
  ]
})
export class AppModule { }
