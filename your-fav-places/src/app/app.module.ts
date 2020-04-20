import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';

//import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
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
import { LoginComponent } from './login/login.component';
import { EditPlaceComponent } from './edit-place/edit-place.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'log',
  },
  {
    path: 'place-page/:author/:id',
    component: PlacePageComponent,
  },
  {
    path: 'show-login',              //напрямую скобки не кодируются, приходится извращаться c редиректом
    redirectTo: '/(log:login)',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    HeaderComponent,
    SidenavComponent,
    PlaceComponent,
    PointComponent,
    PointCardComponent,
    EditPlaceComponent,
    PlacePageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
