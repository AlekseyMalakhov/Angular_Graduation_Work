import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlacesService } from "../places.service";

import { SortComponent } from './sort.component';

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
  private filteredPlaces = new BehaviorSubject(test_places);        //раздаем отфильтрованный список мест
  currentFilteredPlaces = this.filteredPlaces.asObservable();
  changeFilteredPlaces(filtered_places) {
    this.filteredPlaces.next(filtered_places);
  }

  changeSortedPlaces(arr) {}
}

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: PlacesService, useClass: MockService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должен сортировать A - Z', () => {
    component.sort = "A - Z";
    component.ngDoCheck();
    //console.log(component.sorted_places);
    expect(component.sorted_places[0].name).toEqual("Grodno");
    expect(component.sorted_places[1].name).toEqual("Minsk");
    expect(component.sorted_places[2].name).toEqual("Mogilev");
  });

  it('должен сортировать Z - A', () => {
    component.sort = "Z - A";
    component.ngDoCheck();
    //console.log(component.sorted_places);
    expect(component.sorted_places[0].name).toEqual("Mogilev");
    expect(component.sorted_places[1].name).toEqual("Minsk");
    expect(component.sorted_places[2].name).toEqual("Grodno");
  });
});
