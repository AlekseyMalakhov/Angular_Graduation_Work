import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  user_page: boolean;

  filter = {
    author: "All authors",
    min_lat: 0,
    max_lat: 0,
    min_long: 0,
    max_long: 0,
  };  

  listOfAuthors = [
    "All authors",
    "Stipe Miocic",
    "Khabib Nurmagamedov",
    "Conor McGregor",
    "Mirko Cro Cop",
    "Fedor Emelianenko",
  ];

  constructor(private data: PlacesService) {
    this.data.currentUserPage.subscribe(user_page => this.user_page = user_page);
    this.data.currentFilter.subscribe(filter => this.filter = filter);
   }

  ngOnInit(): void {
  }
  
  ngDoCheck() {
    this.data.changeFilter(this.filter);
  }

  checkVisibility() {
    if (this.user_page) {
      return "hide";
    } else {
      return "show";
    }
  }
  

}
