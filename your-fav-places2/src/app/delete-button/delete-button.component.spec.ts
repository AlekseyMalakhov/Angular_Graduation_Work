import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteButtonComponent } from './delete-button.component';
import { BehaviorSubject } from 'rxjs';
import { PlacesService } from "../places.service";

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
  }
];

class MockService {  
  private placesList = new BehaviorSubject(test_places);       //список мест
  currentPlaces = this.placesList.asObservable();
  changePlaces(newPlaces) {
    this.placesList.next(newPlaces);
  }
  changeSelectedPlace(obj) {}
}

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteButtonComponent ],
      providers: [{provide: PlacesService, useClass: MockService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Должен выдавать запрос на удаление", () => {
    var del_but = fixture.nativeElement.querySelector("#del_but");
    del_but.click();
    expect(component.request).toEqual(true);
  });

  it("Должен удалять место", () => {
    component.del_place_id = 2;
    component.deletePlace();
    expect(component.places.length).toEqual(1);
  });

  
});
