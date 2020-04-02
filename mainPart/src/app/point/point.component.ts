import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  @Input() place;

  constructor() { 
  }

  ngOnInit(): void {
  }

  getCoords() {
    return {
      left: this.place.coords[0] + "px", 
      top: this.place.coords[1] + "px"
    };
  }

  showCard() {
    console.log("Fuck you");
  }



}
