import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlacesService } from "../places.service";

import { AllPlacesPageComponent } from './all-places-page.component';
import { AllPlacesCardComponent } from '../all-places-card/all-places-card.component';


var test_places = [
  {
    id: 1,
    name: "Minsk",
    author: "Aleksey Malakhov",
    author_id: "aleksey_malakhov",
    img: '1.jpg',
    description: "Very cosy place",
    coords: [700, 300],
  },
  {
    id: 2,
    name: "Grodno",
    author: "Sergey Sergeev",
    author_id: "sergey_sergeev",
    img: '3.jpg',
    description: "Cool place to have some rest",
    coords: [500, 1200],
  },
  {
    id: 3,
    name: "Mogilev",
    author: "Yakub Kolas",
    author_id: "yakub_kolas",
    img: '4.jpg',
    description: "Amazing cityscape and cuisine",
    coords: [840, 690],
  },
];

class MockService {  
  private sortedPlaces = new BehaviorSubject(test_places);        //раздаем отфильтрованный и отсортированный список мест
  currentSortedPlaces = this.sortedPlaces.asObservable();
  changeSortedPlaces(sorted_places) {
    this.sortedPlaces.next(sorted_places);
  }

  private searchString = new BehaviorSubject("dno");          //переключаем кнопку кнопку сайднав/назад
  currentSearchString = this.searchString.asObservable();
  changeSearchString(search: string) {
    this.searchString.next(search);
  }

  changeUserPage() {}
  changeSidenavButton() {}
}

describe('AllPlacesPageComponent', () => {
  let component: AllPlacesPageComponent;
  let fixture: ComponentFixture<AllPlacesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlacesPageComponent, AllPlacesCardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: PlacesService, useClass: MockService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должен искать', () => {
    var list_of_places = fixture.nativeElement.querySelectorAll("app-all-places-card");
    var found_place = list_of_places[0].querySelector('mat-card-title').textContent;
    expect(found_place).toEqual("Grodno");
  });
});
