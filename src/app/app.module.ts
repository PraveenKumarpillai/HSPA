import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PropertyCardComponent} from './Property/Property-card/Property-card.component';
import {PropertyListComponent} from './Property/Property-List/Property-List.component';
import{NavBarComponent} from './Property/Nav-bar/Nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,PropertyCardComponent,PropertyListComponent,NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
