import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../places.service";
import { OktaAuthService } from '@okta/okta-angular';
//import places from "../places";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  places;
  arr_places;
  title = "Your Favorite Places";
  sidenav_pos:string;
  user = "";
  isAuthenticated: boolean;
  sidenavButtonDisplay;

  constructor(private router: Router, private data: PlacesService, public oktaAuth: OktaAuthService) {
      this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit() {
    this.data.currentPosition.subscribe(sidenav_pos => this.sidenav_pos = sidenav_pos);
    this.data.currentPlaces.subscribe(places => this.places = places);
    this.data.currentSidenavButton.subscribe(sidenavButtonDisplay => this.sidenavButtonDisplay = sidenavButtonDisplay);
    this.data.changeSidenavButton("show_button");
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.user = userClaims.name;
    }
    this.createArr();
  }

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
}
