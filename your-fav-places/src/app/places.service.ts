import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import places from "./places";

var filter_init = {
  author: "All authors",
  min_lat: 0,
  max_lat: 0,
  min_long: 0,
  max_long: 0,
};

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private sidenavPos = new BehaviorSubject("show");       //скрываем/показываем сайднав
  currentPosition = this.sidenavPos.asObservable();

  private sidenavButton = new BehaviorSubject("show_button");          //переключаем кнопку кнопку сайднав/назад
  currentSidenavButton = this.sidenavButton.asObservable();

  private selectedPlace = new BehaviorSubject({});          //объект выбранного места
  currentSelected = this.selectedPlace.asObservable();

  private placesList = new BehaviorSubject(places);       //список мест
  currentPlaces = this.placesList.asObservable();

  private searchString = new BehaviorSubject("");          //переключаем кнопку кнопку сайднав/назад
  currentSearchString = this.searchString.asObservable();

  private filterDisplay = new BehaviorSubject(false);          //переключаем отображение фильтра
  currentFilterDisplay = this.filterDisplay.asObservable();

  private filter = new BehaviorSubject(filter_init);         //раздаем настройки фильтра
  currentFilter = this.filter.asObservable();

  private filteredPlaces = new BehaviorSubject([]);        //раздаем отфильтрованный список мест
  currentFilteredPlaces = this.filteredPlaces.asObservable();


  constructor() { }

  changeSidenavPos(position: string) {
    this.sidenavPos.next(position);
  }

  changeSidenavButton(display: string) {
    this.sidenavButton.next(display);
  }

  changeSelectedPlace(place: object) {
    this.selectedPlace.next(place);
  }

  changePlaces(newPlaces) {
    this.placesList.next(newPlaces);
  }

  changeSearchString(search: string) {
    this.searchString.next(search);
  }

  changeFilterDisplay(filter_display: boolean) {
    this.filterDisplay.next(filter_display);
  }

  changeFilter(filter) {
    this.filter.next(filter);
  }

  changeFilteredPlaces(filtered_places) {
    this.filteredPlaces.next(filtered_places);
    console.log(filtered_places);
  }
}
