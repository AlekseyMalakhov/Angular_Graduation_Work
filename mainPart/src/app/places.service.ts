import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private sidenavPos = new BehaviorSubject("show");
  currentPosition = this.sidenavPos.asObservable();

  constructor() { }

  changeMessage(position: string) {
    this.sidenavPos.next(position);
  }
}
