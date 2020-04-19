import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place;
  @Input() user;
  selected_place;

  constructor(private data: PlacesService) {
    this.data.currentSelected.subscribe(selected_place => this.selected_place = selected_place);
  }

  ngOnInit(): void {
  }

  select(e) {
    e.stopPropagation();
    this.data.changeSelectedPlace(this.place);
  }

}
