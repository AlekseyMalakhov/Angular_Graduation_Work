import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditButtonComponent } from './edit-button.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditButtonComponent', () => {
  let component: EditButtonComponent;
  let fixture: ComponentFixture<EditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditButtonComponent ],
      providers: [{provide: Router, useValue: "/"}],
      schemas: [NO_ERRORS_SCHEMA],
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
