import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditButtonComponent } from './edit-button.component';
import { Router } from '@angular/router';



xdescribe('EditButtonComponent', () => {
  let component: EditButtonComponent;
  let fixture: ComponentFixture<EditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditButtonComponent ],
      providers: [{provide: Router, useValue: "/"}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
