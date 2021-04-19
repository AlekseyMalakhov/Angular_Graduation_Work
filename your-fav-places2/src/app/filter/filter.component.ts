import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() user;
  user_page: boolean;
  places;
  filterDisplay: boolean = false;
  filtered_places = [];

  filter = {
    author: "All authors",
    min_lat: 0,
    max_lat: 0,
    min_long: 0,
    max_long: 0,
  };  

  listOfAuthors = [
    "All authors",
    "Stipe Miocic",
    "Khabib Nurmagamedov",
    "Conor McGregor",
    "Mirko Cro Cop",
    "Fedor Emelianenko",
  ];

  constructor(private data: PlacesService) {
    this.data.currentUserPage.subscribe(user_page => this.user_page = user_page);
    //this.data.currentFilter.subscribe(filter => this.filter = filter);
    this.data.currentPlaces.subscribe(places => this.places = places);
    this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);

   }

  ngOnInit(): void {
  }
  
  ngDoCheck() {
    //this.data.changeFilter(this.filter);
    if (this.places) {
      var result = [...this.places];
      if (this.user_page) {
        /*
        var filter_user_page = {
          author: this.user,
          min_lat: 0,
          max_lat: 0,
          min_long: 0,
          max_long: 0,
        };
        this.data.changeFilter(filter_user_page);
        */
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

  checkVisibility() {
    if (this.user_page) {
      return "hide";
    } else {
      return "show";
    }
  }
  

}
