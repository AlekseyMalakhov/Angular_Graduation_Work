import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from "../places.service";
//import { Router } from '@angular/router';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.css']
})
export class PlacePageComponent implements OnInit {
  places;
  place;
  sidenavButtonDisplay;
  user_obj;

  constructor(private route: ActivatedRoute, private data: PlacesService) { }

  ngOnInit() {
    this.data.currentPlaces.subscribe(places => this.places = places);
    this.data.currentUser.subscribe(user_obj => this.user_obj = user_obj);
    this.data.changeSidenavButton("hide_button");
    this.getPlace();
  }

  getPlace() {
    var id = +this.route.snapshot.paramMap.get('id');
    var pos = this.places.findIndex((e) => (e.id === id));
    this.place = this.places[pos];    
  }

  back() {
    window.history.back();
  }

  /*

  edit() {
    //console.log("edit");
    this.router.navigate(["/"]);
    this.data.changeEditPlace(true);
    this.data.changeNewPlaceCoords(this.place.coords);
    this.data.changePlaceToEdit(this.place);
  }
  */

}
