import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../places.service";


@Component({
  selector: 'app-all-places-page',
  templateUrl: './all-places-page.component.html',
  styleUrls: ['./all-places-page.component.css']
})
export class AllPlacesPageComponent implements OnInit {
  places;
  arr_places;
  search_string: string;
  constructor(private data: PlacesService) { }

  ngOnInit(): void {
    this.data.currentPlaces.subscribe(places => this.places = places);
    this.data.currentSearchString.subscribe(search_string => this.search_string = search_string);
    this.data.changeSidenavButton("hide_button");
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

  search(name: string) {
    var name = name.toLowerCase();
    var str = this.search_string.toLowerCase();
    if (name.indexOf(str) !== -1) {
      return true;
    }
    return false;
  }

}
