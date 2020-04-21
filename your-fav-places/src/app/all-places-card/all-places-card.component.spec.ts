import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlacesCardComponent } from './all-places-card.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
