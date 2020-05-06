import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { UserPlacesPageComponent } from './user-places-page.component';

class ActivatedRouteStub {
  
}

describe('UserPlacesPageComponent', () => {
  let component: UserPlacesPageComponent;
  let fixture: ComponentFixture<UserPlacesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlacesPageComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: ActivatedRoute, useClass: ActivatedRouteStub}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
