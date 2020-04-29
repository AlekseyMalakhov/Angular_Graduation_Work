import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
  @Input() del_place_id;
  places;

  constructor(private data: PlacesService) {
    this.data.currentPlaces.subscribe(places => this.places = places);
  }

  ngOnInit(): void {
  }

  deletePlace() {    
    var new_list = [...this.places];
    var pos = new_list.findIndex((e) => (e.id === this.del_place_id));
    console.log("pos = " + pos);
    console.log("del_place_id = " + this.del_place_id);
    if (pos !== -1) {
      new_list.splice(pos, 1);
      this.data.changePlaces(new_list);
      console.log(new_list); 
    } else {
      console.log("no such position");
    }
  }


}
