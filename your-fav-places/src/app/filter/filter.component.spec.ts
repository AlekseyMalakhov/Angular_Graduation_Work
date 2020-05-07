import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlacesService } from "../places.service";

import { FilterComponent } from './filter.component';

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
];

var filter = {
  author: "Sergey Sergeev",
  min_lat: 0,
  max_lat: 0,
  min_long: 0,
  max_long: 0,
};

//var filtered_places = [];

class MockService {  
  private placesList = new BehaviorSubject(test_places);       //список мест
  currentPlaces = this.placesList.asObservable();

  private userPage = new BehaviorSubject(false);             //проверяем если мы на странице пользователя (тогда показываем только его места)
  currentUserPage = this.userPage.asObservable();

  private filterDisplay = new BehaviorSubject(true);          //переключаем отображение фильтра
  currentFilterDisplay = this.filterDisplay.asObservable();

  changeFilteredPlaces(arr) {}
}

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: PlacesService, useClass: MockService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Должен фильтровать', () => {
    component.filter = filter;
    component.ngDoCheck();
    //console.log(component.filtered_places);
    expect(component.filtered_places[0]).toEqual(undefined);
    expect(component.filtered_places[1].name).toEqual("Grodno");
  });
  
});
