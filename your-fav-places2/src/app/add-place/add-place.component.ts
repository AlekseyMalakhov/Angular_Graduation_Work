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
    if (this.place_to_edit.id) {
      //если прилетело настоящее место для редактирования - берем его
      this.new_place = {...this.place_to_edit};
    } else {
      //если пустой объект - значит будем добавлять новое место
    }
    
  }

  cancelEdit() {
    this.cancel_edit.emit();
  }

  savePlace() {
    //если сохраняем новое место
    if (!this.place_to_edit.id) {
      this.new_place.author = this.user;
      this.new_place.author_id = this.userId;
      this.new_place.coords = this.coords;
      this.new_place.id = this.id;
      this.id = this.id + 1;
      this.data.changeNewPlaceId(this.id);      //share the id of the newerly created place
      var adding_place = {...this.new_place};
      var new_list = [...this.places];
      new_list.push(adding_place);
      this.data.changePlaces(new_list, "add", adding_place);     //update a list of all places in local memory and add new place to remote database
      this.data.changePlaceSaved(true);   //share the "place saved" event
      //console.log(this.places);
      
    } else {
      //если редактируем старое
      this.new_place.coords = this.coords;
      var editing_place = {...this.new_place};
      var new_list = [...this.places];
      var pos = new_list.findIndex((e) => (e.id === editing_place.id));
      new_list[pos] = editing_place;
      this.data.changePlaces(new_list, "update", editing_place);     //update a list of all places in local memory and send edited place to remote database
      this.data.changePlaceSaved(true);
      //чтобы после выхода из редактирования на сайдбаре отображалось уже отредактированное место
      this.data.changeSelectedPlace(editing_place);
      //console.log(new_list);
    }
    
  }

  /*
  It looks like when we change the place or create a new one we always recreate the full list of places, that can be wasteful. We should write separate functions which
  adress just particular strings in database and do not touch the others. Thus in case of huge number of strings in data base we will not overload the network and 
  computer resourses.
  So for now we should write a function which add a new place and update an existing place. In both cases we need only need the current modified or created place. Not
  full list of places like it was before.
  */

}
