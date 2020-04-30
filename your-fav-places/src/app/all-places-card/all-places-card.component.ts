import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-all-places-card',
  templateUrl: './all-places-card.component.html',
  styleUrls: ['./all-places-card.component.css']
})
export class AllPlacesCardComponent implements OnInit {
  @Input() place;
  @Input() userpage;

  constructor(private router: Router, private data: PlacesService) { }

  ngOnInit(): void {
  }

  edit() {
    //console.log("edit");
    this.router.navigate(["/"]);
    this.data.changeEditPlace(true);
    this.data.changeNewPlaceCoords(this.place.coords);
    this.data.changePlaceToEdit(this.place);
  }
}
