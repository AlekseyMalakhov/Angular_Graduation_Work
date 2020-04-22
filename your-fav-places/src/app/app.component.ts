//import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from "./places.service";
import { OktaAuthService } from '@okta/okta-angular';
//import places from "./places";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*
 places = places;
 arr_places;
 */
 title = "Your Favorite Places";
 //sidenav_pos:string;
 user = "";
 userId = "";
 isAuthenticated: boolean;
 filterDisplay: boolean;

 constructor(public oktaAuth: OktaAuthService, private data: PlacesService) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
 }

async ngOnInit() {
  //this.data.currentPosition.subscribe(sidenav_pos => this.sidenav_pos = sidenav_pos);
  this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);
  this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  if (this.isAuthenticated) {
    const userClaims = await this.oktaAuth.getUser();
    this.user = userClaims.name;
    this.userId = userClaims.nickname;
  }
  //this.createArr();
}
/*
 createArr() {
   var arr_places = [];
   var id;
   for (id in this.places) {
     var place_list = this.places[id];
     for (var i = 0; i < place_list.length; i++) {
       arr_places.push(place_list[i]);
     }
   }
   this.arr_places = arr_places;
 }
 */

 logout() {
  this.oktaAuth.logout('/');  
  }
}
