import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {
  @Input() user: string;
  @Input() userId: string;

  @Output() cancel_edit = new EventEmitter<any>();

  new_place = {
    id: 1,
    name: "",
    author: "",
    author_id: "stipe_miocic",
    img: '1.jpg',
    description: "",
    coords: [0, 0],
  };  

  listOfImg = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
  ];

  id: number;

  coords = [];

  constructor(private data: PlacesService) {
    this.data.currentNewPlaceCoords.subscribe(coords => this.coords = coords);
    this.data.currentNewPlaceId.subscribe(id => this.id = id);
  }

  ngOnInit(): void {
  }

  cancelEdit() {
    this.cancel_edit.emit();
  }

  savePlace() {
    this.new_place.author = this.user;
    this.new_place.author_id = this.userId;
    this.new_place.coords = this.coords;
    this.new_place.id = this.id;
    this.id = this.id + 1;
    this.data.changeNewPlaceId(this.id);
    console.log(this.new_place);
  }

}
