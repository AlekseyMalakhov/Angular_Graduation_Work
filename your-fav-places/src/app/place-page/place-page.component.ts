import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from "../places.service";
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.css']
})
export class PlacePageComponent implements OnInit {
  places;
  place;
  user = "";
  isAuthenticated: boolean;
  sidenavButtonDisplay;

  constructor(private route: ActivatedRoute, private data: PlacesService, public oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.data.currentPlaces.subscribe(places => this.places = places);
    //this.data.currentSidenavButton.subscribe(sidenavButtonDisplay => this.sidenavButtonDisplay = sidenavButtonDisplay);
    this.data.changeSidenavButton("hide_button");
    this.getPlace();
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.user = userClaims.name;
    }
  }

  getPlace() {
    //var author_id = this.route.snapshot.paramMap.get('author');
    var id = +this.route.snapshot.paramMap.get('id');
    var pos = this.places.findIndex((e) => (e.id === id));
    this.place = this.places[pos];    
  }

  back() {
    window.history.back();
  }

}
