import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PointCardComponent } from './point-card.component';

var test_place = {
  id: 1,
  name: "Minsk",
  author: "Aleksey Malakhov",
  author_id: "aleksey_malakhov",
  img: '1.jpg',
  description: "Very cosy place",
  coords: [700, 300],
};

describe('PointCardComponent', () => {
  let component: PointCardComponent;
  let fixture: ComponentFixture<PointCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointCardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointCardComponent);
    component = fixture.componentInstance;
    component.place = test_place;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
