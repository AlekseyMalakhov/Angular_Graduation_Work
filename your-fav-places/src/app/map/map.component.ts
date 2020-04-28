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
  coords = [];
  placeSaved: boolean;

  /*
  filter;
  filterDisplay: boolean = false;
  filtered_places = [];
  */

  constructor(private data: PlacesService) {
    this.data.currentSelected.subscribe(selected_place => this.selected_place = selected_place);
    this.data.currentEditPlace.subscribe(editPlace => this.editPlace = editPlace);
    this.data.currentPlaceSaved.subscribe(placeSaved => this.placeSaved = placeSaved);
    //this.data.currentFilter.subscribe(filter => this.filter = filter);
    //this.data.currentFilterDisplay.subscribe(filterDisplay => this.filterDisplay = filterDisplay);
  }

  ngOnInit(): void {
  }
 
  activity(e) {
    //если добавляем место - берем координаты клика, если нет, то просто отменяем выбор
    if (this.editPlace) {
      this.data.changePlaceSaved(false);
      this.coords = [(e.pageX - 38), (e.pageY - 40 - 75)];
      //var coords = [e.pageX, e.pageY];
      this.data.changeNewPlaceCoords(this.coords);
      //this.data.changeNewPlaceCoords(coords);
    } else {
      this.data.changeSelectedPlace({});
    }   
  }

  getCoords() {
    return {
      left: this.coords[0] + "px",
      top: this.coords[1] + "px",
    };
  }
}
