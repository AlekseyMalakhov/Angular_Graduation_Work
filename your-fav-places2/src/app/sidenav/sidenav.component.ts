import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() places;
  @Input() user;
  @Input() userId;

  editPlace: boolean;
  //mystyle = {};
  selected_place;
  search_string: string;
  place_to_edit = {};

  constructor(private router: Router, private data: PlacesService) {
    this.data.currentSelected.subscribe(selected_place => this.selected_place = selected_place);
    this.data.currentSearchString.subscribe(search_string => this.search_string = search_string);
    this.data.currentEditPlace.subscribe(editPlace => this.editPlace = editPlace);
    this.data.currentPlaceToEdit.subscribe(place_to_edit => this.place_to_edit = place_to_edit);
  }

  ngOnInit(): void {
  }

  /*
  ngDoCheck() {
    if (this.editPlace) {
      this.mystyle = {minWidth: "300px"};
    }
  }
  */

  addPlace() {
    if (this.user) {
      //this.editPlace = true;
      this.data.changeEditPlace(true);
      //this.mystyle = {minWidth: "300px"};
    } else {
      this.router.navigate(["/show-login"]);
    }    
  }

  search(name: string) {
    var name = name.toLowerCase();
    var str = this.search_string.toLowerCase();
    if (name.indexOf(str) !== -1) {
      return true;
    }
    return false;
  }

  cancelEditPlace() {
    //this.editPlace = false;
    //возвращаем все переменные в исходные состояния
    this.data.changeEditPlace(false);
    this.data.changePlaceSaved(false);
    this.data.changePlaceToEdit({});
    this.data.changeNewPlaceCoords([700, 300]);
    //this.mystyle = {minWidth: ""};
  }

  cancelSelection() {
    this.data.changeSelectedPlace({});
  }

}
