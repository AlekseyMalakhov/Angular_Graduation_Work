import { Component, OnInit } from '@angular/core';
import { PlacesService } from "./places.service";
import { OktaAuthService } from '@okta/okta-angular';
import urlconst from "./urlconst";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Your Favorite Places";
  user = "";
  userId = "";
  user_page: boolean;
  isAuthenticated: boolean;
  
  constructor(public oktaAuth: OktaAuthService, private data: PlacesService) {
      this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

async ngOnInit() {
  this.loadPlaces();
  this.data.currentUserPage.subscribe(user_page => this.user_page = user_page);
  this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  if (this.isAuthenticated) {
    const userClaims = await this.oktaAuth.getUser();
    this.user = userClaims.name;
    this.userId = userClaims.nickname;
    this.data.changeUser({user: this.user, 
                          userId: this.userId});
  }  
}

//make a request to the remote Mysql database to provide us all places it has.
loadPlaces() {
  var data = this.data;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var places_1 = JSON.parse(this.responseText);
          console.log(places_1);
          var places = [];
          for (let i = 0; i < places_1.places.length; i++) {
            places[i] = places_1.places[i];
            places[i].coords = [places_1.coords[i].x, places_1.coords[i].y];
          }
          //console.log(places);
          data.changePlaces(places);
      }
  };

  xhttp.open("POST", urlconst + "/get_places", true),
  xhttp.setRequestHeader("Content-type", "application/json"),
  xhttp.send();
}

logout() {
  this.oktaAuth.signOut('/');  
  }
}
