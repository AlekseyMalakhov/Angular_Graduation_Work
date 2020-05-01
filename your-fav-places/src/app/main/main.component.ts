import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../places.service";
//import { OktaAuthService } from '@okta/okta-angular';
//import places from "../places";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  places;
  editPlace: boolean;
  //arr_places;
  sidenav_pos:string;
  //user = "";
  //userId = "";
  //isAuthenticated: boolean;
  sidenavButtonDisplay;
  user_obj;

  /*
  filter;
  filterDisplay: boolean = false;
  filtered_places = [];
  */

  constructor(private router: Router, private data: PlacesService) {
      //this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  ngOnInit() {
    this.data.changeUserPage(false);
    this.data.currentPosition.subscribe(sidenav_pos => this.sidenav_pos = sidenav_pos);
    this.data.currentUser.subscribe(user_obj => this.user_obj = user_obj);
    this.data.currentEditPlace.subscribe(editPlace => this.editPlace = editPlace);
    //this.data.currentPlaces.subscribe(places => this.places = places);
    this.data.currentFilteredPlaces.subscribe(places => this.places = places);
    this.data.currentSidenavButton.subscribe(sidenavButtonDisplay => this.sidenavButtonDisplay = sidenavButtonDisplay);
    //this.data.currentFilter.subscribe(filter => this.filter = filter);
    //this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);
    this.data.changeSidenavButton("show_button");
    /*
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.user = userClaims.name;
      this.userId = userClaims.nickname;
    }
    */
    //this.createArr();
  }

  getSidenavClass() {
    if ((this.sidenav_pos === "show") &&(!this.editPlace)) {
      return "show normal"
    }

    if ((this.sidenav_pos === "hide") &&(!this.editPlace)) {
      return "hide normal"
    }

    if ((this.sidenav_pos === "show") &&(this.editPlace)) {
      return "show edit"
    }

    if ((this.sidenav_pos === "hide") &&(this.editPlace)) {
      return "hide edit"
    }
  }

  /*

  ngDoCheck() {
    if (this.arr_places) {
      var result = [...this.arr_places];
      if (this.filterDisplay) {
        if (this.filter.author && (this.filter.author !== "All authors")) {
          result = result.map((e) => {
            if (e.author === this.filter.author) {
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
}
