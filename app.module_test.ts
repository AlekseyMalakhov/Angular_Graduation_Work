import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PlaceComponent } from './place/place.component';
import { PointComponent } from './point/point.component';
import { PointCardComponent } from './point-card/point-card.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';

import sampleConfig from './app.config';

const oktaConfig = Object.assign({
  onAuthRequired: ({oktaAuth, router}) => {
    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, sampleConfig.oidc);



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    SidenavComponent,
    PlaceComponent,
    PointComponent,
    PointCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
