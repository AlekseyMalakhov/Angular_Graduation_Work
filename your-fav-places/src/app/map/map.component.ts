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
  editPlace: boolean;
  /*
  filter;
  filterDisplay: boolean = false;
  filtered_places = [];
  */

  constructor(private data: PlacesService) {
    this.data.currentSelected.subscribe(selected_place => this.selected_place = selected_place);
    this.data.currentEditPlace.subscribe(editPlace => this.editPlace = editPlace);
    //this.data.currentFilter.subscribe(filter => this.filter = filter);
    //this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);
  }

  ngOnInit(): void {
  }
 
  cancelSelection(e) {
    if (this.editPlace) {
      var coords = [e.pageX, e.pageY];
      this.data.changeNewPlaceCoords(coords);
    } else {
      this.data.changeSelectedPlace({});
    }    
  }
}
