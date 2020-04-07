import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import places from "./places.json";

console.log(places);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "mainPart";
  places = places;

  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService, private router: Router) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }
  
  logout() {
    this.oktaAuth.logout('/');
  }

}
