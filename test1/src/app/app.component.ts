import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test1';

  user = "";
  isAuthenticated: boolean;
 
  constructor(private router: Router, public oktaAuth: OktaAuthService) {
     this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }
 
 async ngOnInit() {
   this.isAuthenticated = await this.oktaAuth.isAuthenticated();
   if (this.isAuthenticated) {
     const userClaims = await this.oktaAuth.getUser();
     this.user = userClaims.name;
   }
 }
 
  logout() {
   this.oktaAuth.logout('/');  
   }
}
