import { Component, OnInit, Input} from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Input() places;
  @Input() user;
  selected_place;
  /*
  filter;
  filterDisplay: boolean = false;
  filtered_places = [];
  */

  constructor(private data: PlacesService) {
    this.data.currentSelected.subscribe(selected_place => this.selected_place = selected_place);
    //this.data.currentFilter.subscribe(filter => this.filter = filter);
    //this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);
  }

  ngOnInit(): void {
  }

  /*

  ngDoCheck() {
    if (this.places) {
      var result = [...this.places];
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
    }    
  }

  */

  cancelSelection() {
    this.data.changeSelectedPlace({});
  }

}
