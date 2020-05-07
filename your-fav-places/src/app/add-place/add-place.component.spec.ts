import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { PlacesService } from "../places.service";
import { AddPlaceComponent } from './add-place.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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

var id_init = 52;

class MockService {  
  private placesList = new BehaviorSubject(test_places);       //список мест
  currentPlaces = this.placesList.asObservable();
  changePlaces(newPlaces) {
    this.placesList.next(newPlaces);
  }

  private newPlaceId = new BehaviorSubject(id_init);             //раздаем id добавленного места
  currentNewPlaceId = this.newPlaceId.asObservable();
  changeNewPlaceId(id: number) {
    this.newPlaceId.next(id);
  }

  private newPlaceCoords = new BehaviorSubject([840, 690]);             //раздаем координаты добавленного места
  currentNewPlaceCoords = this.newPlaceCoords.asObservable();
  changeNewPlaceCoords(coords: number[]) {
    this.newPlaceCoords.next(coords);
  }

  changeSelectedPlace(obj) {}
  changePlaceSaved(bul) {}
}

var place_to_add = {
  id: 3,
  name: "Mogilev",
  author: "Yakub Kolas",
  author_id: "yakub_kolas",
  img: '4.jpg',
  description: "Amazing cityscape and cuisine",
  coords: [840, 690],
};

var edited_place = {
  id: 2,
  name: "Grodno",
  author: "Sergey Sergeev",
  author_id: "sergey_sergeev",
  img: '3.jpg',
  description: "I decided change description",
  coords: [500, 1200],
};

describe('EditPlaceComponent', () => {
  let component: AddPlaceComponent;
  let fixture: ComponentFixture<AddPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaceComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: PlacesService, useClass: MockService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Должен добавлять новое место", () => {
    component.place_to_edit = {};
    component.place_to_edit.id = false;
    component.user = place_to_add.author;
    component.userId = place_to_add.author_id;
    component.new_place = place_to_add;
    component.savePlace();
    //console.log(component.places);
    expect(component.places.length).toEqual(3);
  });

  
  it("Должен редактировать существующее место", () => {
    component.place_to_edit = edited_place;
    component.new_place = edited_place;
    component.savePlace();
    //console.log(component.places);
    expect(component.places[1].description).toEqual("I decided change description");
  });
  
});
