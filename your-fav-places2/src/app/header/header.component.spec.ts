import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatMenuModule} from '@angular/material/menu';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MatMenuModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должен переключать сайднав', () => {
    component.sidenav_pos = "hide";
    var toggle_sidenav_butt = fixture.nativeElement.querySelector("#toggle_sidenav_butt");
    toggle_sidenav_butt.click();
    expect(component.sidenav_pos).toEqual("show");
    toggle_sidenav_butt.click();
    expect(component.sidenav_pos).toEqual("hide");
  });
});
