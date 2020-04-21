import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlacesPageComponent } from './all-places-page.component';

describe('AllPlacesPageComponent', () => {
  let component: AllPlacesPageComponent;
  let fixture: ComponentFixture<AllPlacesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlacesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
