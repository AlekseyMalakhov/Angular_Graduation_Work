import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  author: string;
  min_lat: number;
  max_lat: number;
  min_long: number;
  max_long: number;

  listOfAuthors = [
    "All authors",
    "Stipe Miocic",
    "Khabib Nurmagamedov",
    "Conor McGregor",
    "Mirko Cro Cop",
    "Fedor Emelianenko",
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.min_lat);
  }

  showAuthors(e) {
    this.author = e.value;
    console.log(this.author);
  }

  onChangeMinLat(e) {
    this.min_lat = e.target.value;
    console.log(this.min_lat);
  }

  onChangeMaxLat(e) {
    this.max_lat = e.target.value;
    console.log(this.max_lat);
  }

  onChangeMinLong(e) {
    this.min_long = e.target.value;
    console.log(this.min_long);
  }

  onChangeMaxLong(e) {
    this.max_long = e.target.value;
    console.log(this.max_long);
  }

}
