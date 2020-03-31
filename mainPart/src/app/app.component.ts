import { Component } from '@angular/core';
import places from "./places.json";

console.log(places);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "mainPart";
  places = places;

}
