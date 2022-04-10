import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AttributeDirective} from "./attribute.directive";
import {FormatNumberPipe} from './format-number.pipe';
import {SET_INTERVAL, DOCUMENT, TimerService} from "./timer.service";
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    FormatNumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
export class AppModule {
}
