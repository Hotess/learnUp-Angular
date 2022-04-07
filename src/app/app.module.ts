import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {AttributeDirective} from "./attribute.directive";
import { FormatNumberPipe } from './format-number.pipe';
import {SET_INTERVAL, DOCUMENT, TimerService} from "./timer.service";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    FormatNumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TimerService,
    {
      provide: DOCUMENT,
      useValue: document
    },
    {
      provide: SET_INTERVAL,
      useValue: setInterval
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
