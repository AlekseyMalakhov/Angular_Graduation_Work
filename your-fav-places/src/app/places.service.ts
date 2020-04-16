import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private sidenavPos = new BehaviorSubject("show");
  currentPosition = this.sidenavPos.asObservable();

  private selectedPlace = new BehaviorSubject({});
  currentSelected = this.selectedPlace.asObservable();

  constructor() { }

  changeMessage(position: string) {
    this.sidenavPos.next(position);
  }

  changeSelectedPlace(place: object) {
    this.selectedPlace.next(place);
    //console.log(place);
  }
}
