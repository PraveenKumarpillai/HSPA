import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{PropertyCardComponent} from './Property/Property-card/Property-card.component';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './Nav-bar/Nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,PropertyCardComponent,PropertyListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
