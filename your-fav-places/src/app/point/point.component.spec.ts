import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PointComponent } from './point.component';

var test_place = {
  id: 1,
  name: "Minsk",
  author: "Aleksey Malakhov",
  author_id: "aleksey_malakhov",
  img: '1.jpg',
  description: "Very cosy place",
  coords: [700, 300],
};

describe('PointComponent', () => {
  let component: PointComponent;
  let fixture: ComponentFixture<PointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointComponent);
    component = fixture.componentInstance;
    component.place = test_place;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
