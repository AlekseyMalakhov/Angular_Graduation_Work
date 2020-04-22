import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import places from "./places";

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
}
