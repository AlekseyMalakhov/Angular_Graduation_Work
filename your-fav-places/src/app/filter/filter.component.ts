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
  }

}
