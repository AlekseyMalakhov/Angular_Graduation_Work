import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlacesCardComponent } from './all-places-card.component';

var test_place = {
  id: 1,
  name: "Minsk",
  author: "Aleksey Malakhov",
  author_id: "aleksey_malakhov",
  img: '1.jpg',
  description: "Very cosy place",
  coords: [700, 300],
};

var userpage = false;

describe('AllPlacesCardComponent', () => {
  let component: AllPlacesCardComponent;
  let fixture: ComponentFixture<AllPlacesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlacesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlacesCardComponent);
    component = fixture.componentInstance;
    component.place = test_place;
    component.userpage = userpage;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
