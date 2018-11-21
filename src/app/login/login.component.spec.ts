import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "../app-routing.module";

import { LoginComponent } from './login.component';
import { LoginAccountComponent } from "../login-account/login-account.component";

import {NO_ERRORS_SCHEMA} from "@angular/core";
import {JwtAuthenticationService} from "../services/jwt-authentication.service";

import { MockJwtAuthService } from "../mocks/mock-jwt-auth-service";

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
        { provide: JwtAuthenticationService, useClass: MockJwtAuthService }
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
