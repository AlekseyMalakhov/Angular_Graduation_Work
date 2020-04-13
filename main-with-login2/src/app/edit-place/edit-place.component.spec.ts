import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceComponent } from './edit-place.component';

describe('EditPlaceComponent', () => {
  let component: EditPlaceComponent;
  let fixture: ComponentFixture<EditPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
