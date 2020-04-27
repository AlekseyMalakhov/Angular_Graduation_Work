import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  sort: string;
  places;
  sorted_places = [];
  names = [];

  listOfSorts = [
    "Without sorting",
    "A - Z",
    "Z - A",
  ];

  constructor(private data: PlacesService) {
    this.data.currentFilteredPlaces.subscribe(places => this.places = places);
  }

  ngOnInit(): void {
    this.sorted_places = [...this.places];
  }

  ngDoCheck() {
    if (this.sort === "A - Z") {
      this.sortAZ();
      this.createSortedPlaces();
    }
    if (this.sort === "Z - A") {
      this.sortZA();
      this.createSortedPlaces();
    }
    if (this.sort === "Without sorting") {
      this.sorted_places = this.places;
    }
    this.data.changeSortedPlaces(this.sorted_places);
  }

  sortAZ() {
    this.names = [];
    this.names = this.places.map((e) => {
      if (e) {
        return e.name;
      }
    });
    this.names.sort();    
  }

  sortZA() {
    this.sortAZ();
    this.names.reverse();
  }

  createSortedPlaces() {
    this.sorted_places = [];
    this.names.forEach((e) => {
      this.places.forEach((pl) => {
        if (pl && (pl.name === e)) {
          this.sorted_places.push(pl);
        }
      });
    });
  }
}
