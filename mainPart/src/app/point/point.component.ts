import { Component, OnInit, Input } from '@angular/core';

function getviewportCoords() {  // находим координаты вьюпорта
  var viewportCoords = [];		
  viewportCoords[0] = window.scrollX;		//координаты верхнего левого угла вьюпорта
  viewportCoords[1] = window.scrollY;
  var w = window.innerWidth;
  var h = window.innerHeight;
  viewportCoords[2] = viewportCoords[0] + w;			//координаты правого нижнего угла вьюпорта
  viewportCoords[3] = viewportCoords[1] + h;
  return viewportCoords;
}

function findPosition(viewportCoords, coords) {     //находим положение карточки относительно точки места
  var pos = "bottom";
  var vp_l = viewportCoords[0];
  var vp_r = viewportCoords[2];
  var vp_t = viewportCoords[1];
  var vp_b = viewportCoords[3];

  var place_x = coords[0];
  var place_y = coords[1];

  var dist_l = place_x - vp_l;
  var dist_r = vp_r - place_x;
  var dist_t = place_y - vp_t;
  var dist_b = vp_b - place_y;

  console.log(dist_l + ", " + dist_r);
  console.log(dist_t + ", " + dist_b);

  if ((dist_b < 460) && (dist_r > 200)) {
    pos = "top";
  }

  if ((dist_b > 460) && (dist_r < 200)) {
    pos = "left";
  }

  if ((dist_b < 460) && (dist_r < 200)) {
    pos = "topLeft";
  }

  return pos;
}

function cardStyle(pos) {
  var style;
  switch(pos) {
    case "bottom":
      style = {display: "block"};
      break;
    case "top":
      style = {
        display: "block",
        top: "-350px"
      };
      break;
    case "left":
      style = {
        display: "block",
        left: "-160px"
      };
      break;
    case "topLeft":
      style = {
        display: "block",
        top: "-350px",
        left: "-160px"
      };
      break;
    default:
      style = {display: "block"};
  }
  return style;
}

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  @Input() place;

  mystyle = {display: "none"};

  constructor() { 
  }

  ngOnInit(): void {
  }

  getCoords() {
    console.log("we get coords");
    return {
      left: this.place.coords[0] + "px",
      top: this.place.coords[1] + "px",
    };
  }

  showCard() {
    //находим где отображать карточку
    var viewportCoords = getviewportCoords();
    var pos = findPosition(viewportCoords, this.place.coords);
    console.log(pos);
    this.mystyle = cardStyle(pos);
    console.log(this.mystyle);
  }

  hideCard() {
    //this.mystyle = {display: "none"};
  }



}
