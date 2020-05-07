import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OktaAuthService } from '@okta/okta-angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class mockAuth {
  private isAuthenticated = new BehaviorSubject(false);       //список мест
  $authenticationState = this.isAuthenticated.asObservable();
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: OktaAuthService, useClass: mockAuth},
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
