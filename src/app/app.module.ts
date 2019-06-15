import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightOffersComponent } from './flight-offers/flight-offers.component';

import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './services/app.config';
import { CollapseModule } from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [
    AppComponent,
    FlightOffersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
