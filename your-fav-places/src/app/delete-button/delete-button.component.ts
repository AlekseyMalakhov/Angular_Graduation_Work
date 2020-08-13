import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
  @Input() del_place_id;
  @Input() del_place_name;
  @Input() back_after_del;
  places;
  request = false;

  constructor(private data: PlacesService) {
    this.data.currentPlaces.subscribe(places => this.places = places);
  }

  ngOnInit(): void {
  }

  askToDelete() {
    this.request = true; 
  }

  cancel() {
    this.request = false; 
  }

  back() {
    window.history.back();
  }

  deletePlace() {
    var new_list = [...this.places];
    var pos = new_list.findIndex((e) => (e.id === this.del_place_id));
    //console.log("pos = " + pos);
    //console.log("del_place_id = " + this.del_place_id);
    if (pos !== -1) {
      new_list.splice(pos, 1);
      this.data.changePlaces(new_list, "delete", this.del_place_id);
      //console.log(new_list);
      //чтобы после выхода из удаления на сайдбаре не отображалось удаленное место
      this.data.changeSelectedPlace({});
    } else {
      console.log("no such position");
    }
    this.request = false;
    if (this.back_after_del) {
      this.back();
    }    
  }


}
