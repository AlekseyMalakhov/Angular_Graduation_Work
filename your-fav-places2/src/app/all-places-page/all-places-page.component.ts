import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from "../places.service";
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-all-places-page',
  templateUrl: './all-places-page.component.html',
  styleUrls: ['./all-places-page.component.css']
})
export class AllPlacesPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  places;
  //arr_places;
  //filter;
  view_range = [0, 99];
  search_string: string;
  
  constructor(private data: PlacesService) { }

  ngOnInit(): void {
    //this.data.currentFilter.subscribe(filter => this.filter = filter);
    //this.filter.author = "All authors";
    //this.data.changeFilter(this.filter);
    this.data.changeUserPage(false);
    this.data.currentSortedPlaces.subscribe(places => this.places = places);
    this.data.currentSearchString.subscribe(search_string => this.search_string = search_string);
    this.data.changeSidenavButton("hide_button");    
    //this.createArr();
  }

  /*

  ngDoCheck() {
    console.log(this.paginator);
  }

  */

  createRange() {
    var pageIndex = this.paginator.pageIndex;
    var pageSize = this.paginator.pageSize;
    //console.log(this.paginator.pageSize);
   //console.log(this.paginator.pageIndex);
    var first_item: number;
    var last_item: number;
    if (pageIndex === 0) {
      first_item = 0;
      last_item = pageSize - 1;      
    }
    if (pageIndex !== 0) {
      first_item = pageSize * pageIndex;
      last_item = first_item + pageSize - 1;
    }
    this.view_range = [first_item, last_item];
    //console.log(this.view_range);
    //console.log(this.paginator.length);
  }

  /*
  createArr() {
    var arr_places = [];
    var id;
    for (id in this.places) {
      var place_list = this.places[id];
      for (var i = 0; i < place_list.length; i++) {
        arr_places.push(place_list[i]);
      }
    }
    this.arr_places = arr_places;
  }
  */

  search(name: string) {
    var name = name.toLowerCase();
    var str = this.search_string.toLowerCase();
    if (name.indexOf(str) !== -1) {
      return true;
    }
    return false;
  }

}
