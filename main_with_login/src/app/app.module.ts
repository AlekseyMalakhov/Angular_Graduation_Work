import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';


import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PlaceComponent } from './place/place.component';
import { PointComponent } from './point/point.component';
import { PointCardComponent } from './point-card/point-card.component';

import sampleConfig from './app.config';

const oktaConfig = Object.assign({
  onAuthRequired: ({oktaAuth, router}) => {
    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, sampleConfig.oidc);

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ OktaAuthGuard ],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [ OktaAuthGuard ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    LoginComponent,
    MapComponent,
    HeaderComponent,
    SidenavComponent,
    PlaceComponent,
    PointComponent,
    PointCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }