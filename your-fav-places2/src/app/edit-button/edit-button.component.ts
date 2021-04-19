import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from "../places.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  @Input() place;
  @Input() go_root;

  constructor(private data: PlacesService, private router: Router) { }

  ngOnInit(): void {
  }

  edit() {
    //console.log("edit");
    if(this.go_root) {
      this.router.navigate(["/"]);
    }    
    this.data.changeEditPlace(true);
    this.data.changeNewPlaceCoords(this.place.coords);
    this.data.changePlaceToEdit(this.place);
  }

}
