import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { PlacesService } from "../places.service";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PlacePageComponent } from './place-page.component';

class ActivatedRouteStub {
  private subject = new ReplaySubject<ParamMap>();
  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }
  readonly paramMap = this.subject.asObservable();
  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }
}

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
  private placesList = new BehaviorSubject(test_places);       //список мест
  currentPlaces = this.placesList.asObservable();
  changePlaces(newPlaces) {
    this.placesList.next(newPlaces);
  }

  private user = new BehaviorSubject({});          //раздаем имя пользователя
  currentUser= this.user.asObservable();
  changeUser(user_obj: object) {
    this.user.next(user_obj);
  }

  changeSidenavButton() {}
}

describe('PlacePageComponent', () => {
  let component: PlacePageComponent;
  let fixture: ComponentFixture<PlacePageComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    //activatedRoute = new ActivatedRouteStub({ author: "sergey_sergeev", id: 2 });
    TestBed.configureTestingModule({
      declarations: [ PlacePageComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: PlacesService, useClass: MockService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePageComponent);
    //activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    activatedRoute.setParamMap({ author: "sergey_sergeev", id: 2 });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('должен проходить к существующему месту', () => {
    console.log(component.place);
    expect(component.place.name).toEqual("Grodno");
  });


});
