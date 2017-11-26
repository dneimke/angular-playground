import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, MessageService, Multiplier } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService, Multiplier],
  bootstrap: [AppComponent]
})
export class AppModule { }
