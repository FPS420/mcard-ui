import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { BusinessCardComponent } from './business-card/business-card.component';

import { MenuSearchBarComponent } from './menu-search-bar/menu-search-bar.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuCardPermaComponent } from './menu-card-perma/menu-card-perma.component';
import { NavComponent } from './nav/nav.component';
import { BusinessAreaComponent } from './business-area/business-area.component';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { ProfileComponent } from './profile/profile.component';
import { McardFormComponent } from './mcard-form/mcard-form.component';
import { BusinessCreatingFormComponent } from './business-creating-form/business-creating-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuSearchComponent,
    BusinessCardComponent,
    MenuSearchBarComponent,
    MenuCardComponent,
    MenuCardPermaComponent,
    NavComponent,
    BusinessAreaComponent,
    AuthButtonComponent,
    ProfileComponent,
    McardFormComponent,
    BusinessCreatingFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-w1hpgidh.us.auth0.com',
      clientId: 'q0v9xcmpRlk3owkH5ohY1SGePvDlxgcC'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
