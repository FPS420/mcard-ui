import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { BusinessCardComponent } from './business-card/business-card.component';

import { MenuSearchBarComponent } from './menu-search-bar/menu-search-bar.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuCardPermaComponent } from './menu-card-perma/menu-card-perma.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSearchComponent,
    BusinessCardComponent,
    MenuSearchBarComponent,
    MenuCardComponent,
    MenuCardPermaComponent,
    NavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
