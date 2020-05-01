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
  //places;
  //arr_places;
  title = "Your Favorite Places";
  //sidenav_pos:string;
  user = "";
  userId = "";
  user_page: boolean;
  isAuthenticated: boolean;
  
  /*
  filter;
  filterDisplay: boolean = false;
  filtered_places = [];
  */

  constructor(public oktaAuth: OktaAuthService, private data: PlacesService) {
      this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

async ngOnInit() {
  this.loadPlaces();
  //this.data.currentPosition.subscribe(sidenav_pos => this.sidenav_pos = sidenav_pos);
  this.data.currentUserPage.subscribe(user_page => this.user_page = user_page);
  //this.data.currentPlaces.subscribe(places => this.arr_places = places);
  //this.createArr();
  //this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);
  //this.data.currentFilter.subscribe(filter => this.filter = filter);
  //this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);
  this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  if (this.isAuthenticated) {
    const userClaims = await this.oktaAuth.getUser();
    this.user = userClaims.name;
    this.userId = userClaims.nickname;
    this.data.changeUser({user: this.user, 
                          userId: this.userId});
  }  
}

loadPlaces() {
  var data = this.data;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var places = JSON.parse(this.responseText);
          data.changePlaces(places);
      }
  };
  xhttp.open("GET", "http://localhost:8080/places.json", true);
  xhttp.send();
}

/*
ngDoCheck() {
  if (this.arr_places) {
    var result = [...this.arr_places];
    if (this.user_page) {
      result = result.map((e) => {
        if (e && e.author === this.user) {
          return e;
        }
      });
    }
    if (this.filterDisplay) {
      if (this.filter.author && (this.filter.author !== "All authors") && !this.user_page) {
        result = result.map((e) => {
          if (e && e.author === this.filter.author) {
            return e;
          }
        });
      }
      if (this.filter.min_lat) {
        result = result.map((e) => {
          if (e && (e.coords[1] > this.filter.min_lat)) {
            return e;
          }
        });
      }
      if (this.filter.max_lat) {
        result = result.map((e) => {
          if (e && (e.coords[1] < this.filter.max_lat)) {
            return e;
          }
        });
      }
      if (this.filter.min_long) {
        result = result.map((e) => {
          if (e && (e.coords[0] > this.filter.min_long)) {
            return e;
          }
        });
      }
      if (this.filter.max_long) {
        result = result.map((e) => {
          if (e && (e.coords[0] < this.filter.max_long)) {
            return e;
          }
        });
      }
    }
    this.filtered_places = result;
    this.data.changeFilteredPlaces(this.filtered_places);
  }
}
*/

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
