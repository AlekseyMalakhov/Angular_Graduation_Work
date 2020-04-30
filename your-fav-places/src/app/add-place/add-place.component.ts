import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  @Input() user: string;
  @Input() userId: string;
  @Input() place_to_edit;
  places;
  @Output() cancel_edit = new EventEmitter<any>();

  new_place = {
    id: 1,
    name: "",
    author: "",
    author_id: "stipe_miocic",
    img: '1.jpg',
    description: "",
    coords: [700, 300],
  };  

  listOfImg = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
  ];

  id: number;

  coords = [700, 300];

  constructor(private data: PlacesService) {
    this.data.currentNewPlaceCoords.subscribe(coords => this.coords = coords);
    this.data.currentNewPlaceId.subscribe(id => this.id = id);
    this.data.currentPlaces.subscribe(places => this.places = places);
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log("нам прилетело место на изменение");
    console.log(this.place_to_edit);
    this.new_place = {...this.place_to_edit};
  }

  cancelEdit() {
    this.cancel_edit.emit();
  }

  savePlace() {
    //если сохраняем новое место
    if (!this.place_to_edit) {
      this.new_place.author = this.user;
      this.new_place.author_id = this.userId;
      this.new_place.coords = this.coords;
      this.new_place.id = this.id;
      this.id = this.id + 1;
      this.data.changeNewPlaceId(this.id);
      var adding_place = {...this.new_place};
      var new_list = [...this.places];
      new_list.push(adding_place);
      this.data.changePlaces(new_list);
      this.data.changePlaceSaved(true);
      console.log(this.places);
    } else {
      console.log("мы тут редактируем старое. У нас вон тут какое место");
      console.log(this.place_to_edit);
    }
    
  }

}
