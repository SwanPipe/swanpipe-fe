import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "../app-routing.module";

import { LoginComponent } from './login.component';
import { LoginAccountComponent } from "../login-account/login-account.component";

import {NO_ERRORS_SCHEMA} from "@angular/core";
import {JwtAuthenticationServiceService} from "../services/jwt-authentication-service.service";

class MockJwtAuthService {
  login( id: string, password: string ) {}
  logout() {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        LoginAccountComponent
      ],
      imports: [
        FormsModule,
        AppRoutingModule
      ],
      providers: [
        { provide: JwtAuthenticationServiceService, useClass: MockJwtAuthService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
