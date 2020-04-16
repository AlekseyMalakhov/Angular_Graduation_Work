import { Component, OnInit, Input} from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  //Object = Object;
  @Input() places;
  @Input() user;
  selected_place;

  constructor(private data: PlacesService) {
    this.data.currentSelected.subscribe(selected_place => this.selected_place = selected_place);
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  cancelSelection() {
    this.data.changeSelectedPlace({});
  }

}
