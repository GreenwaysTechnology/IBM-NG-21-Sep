import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { CalculatorModule } from './calculator/calculator.module';
import { UsersModule } from './users/users.module';
import { ReactiveModule } from './reactive/reactive.module';
import { BroadcastingModule } from './broadcasting/broadcasting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreeterModule,
    CalculatorModule,
    UsersModule,
    ReactiveModule,
    BroadcastingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
