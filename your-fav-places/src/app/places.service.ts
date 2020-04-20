import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import places from "./places";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private sidenavPos = new BehaviorSubject("show");
  currentPosition = this.sidenavPos.asObservable();

  private selectedPlace = new BehaviorSubject({});
  currentSelected = this.selectedPlace.asObservable();

  private placesList = new BehaviorSubject(places);
  currentPlaces = this.placesList.asObservable();

  constructor() { }

  changeMessage(position: string) {
    this.sidenavPos.next(position);
  }

  changeSelectedPlace(place: object) {
    this.selectedPlace.next(place);
  }

  changePlaces(newPlaces) {
    this.placesList.next(newPlaces);
  }
}
