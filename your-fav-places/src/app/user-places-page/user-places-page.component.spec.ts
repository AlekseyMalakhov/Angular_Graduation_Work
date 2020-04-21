import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlacesPageComponent } from './user-places-page.component';

describe('UserPlacesPageComponent', () => {
  let component: UserPlacesPageComponent;
  let fixture: ComponentFixture<UserPlacesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlacesPageComponent ]
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
