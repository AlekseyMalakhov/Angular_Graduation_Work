import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
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
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';  
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
import { AddPlaceComponent } from './add-place/add-place.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { MainComponent } from './main/main.component';
import { AllPlacesPageComponent } from './all-places-page/all-places-page.component';
import { AllPlacesCardComponent } from './all-places-card/all-places-card.component';
import { UserPlacesPageComponent } from './user-places-page/user-places-page.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'all-places-page',
    component: AllPlacesPageComponent,
  },
  {
    path: 'user-places-page/:author',
    component: UserPlacesPageComponent,
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
    AddPlaceComponent,
    PlacePageComponent,
    MainComponent,
    AllPlacesPageComponent,
    AllPlacesCardComponent,
    UserPlacesPageComponent,
    FilterComponent,
    SortComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
