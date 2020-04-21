import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-all-places-card',
  templateUrl: './all-places-card.component.html',
  styleUrls: ['./all-places-card.component.css']
})
export class AllPlacesCardComponent implements OnInit {
  @Input() place;

  constructor(private data: PlacesService) { }

  ngOnInit(): void {
    this.data.changeSidenavButton("hide_button");
  }

}
