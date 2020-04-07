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
import { ProtectedComponent } from './protected/protected.component';
import { LoginComponent } from './login/login.component';

//то что я добавил
import { Routes, RouterModule } from '@angular/router';
import {
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

//конец того что я добавил

const config = {
  issuer: 'https://dev-843586.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa48iu3oCyIWyO3I4x6',
  pkce: true
}

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const appRoutes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    SidenavComponent,
    PlaceComponent,
    PointComponent,
    PointCardComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
