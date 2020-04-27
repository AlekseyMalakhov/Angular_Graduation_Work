import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-user-places-page',
  templateUrl: './user-places-page.component.html',
  styleUrls: ['./user-places-page.component.css']
})
export class UserPlacesPageComponent implements OnInit {
  places;
  //user_places;
  search_string: string;

  constructor(private route: ActivatedRoute, private data: PlacesService) { }

  ngOnInit(): void {
    //var author_id = this.route.snapshot.paramMap.get('author');
    //this.data.currentPlaces.subscribe(places => this.places = places);
    this.data.changeUserPage(true);
    this.data.currentSortedPlaces.subscribe(places => this.places = places);
    this.data.currentSearchString.subscribe(search_string => this.search_string = search_string);
    this.data.changeSidenavButton("hide_button");
    //this.getPlaces();
  }

  /*
  getPlaces() {
    var author_id = this.route.snapshot.paramMap.get('author');
    this.user_places = this.places[author_id];
  }
  */

  back() {
    window.history.back();
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
