import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { PlacePageComponent } from './place-page.component';

class ActivatedRouteStub {
  
}

xdescribe('PlacePageComponent', () => {
  let component: PlacePageComponent;
  let fixture: ComponentFixture<PlacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacePageComponent ],
      providers: [{provide: ActivatedRoute, useClass: ActivatedRouteStub}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
