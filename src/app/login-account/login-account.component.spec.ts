import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAccountComponent } from './login-account.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import { LoginAccountService } from "../services/login-account.service";
import {Observable} from "rxjs";
import {Login} from "../models/login";

class MockLoginAccountService {
  loginAccount() : Observable<Login> {
    return Observable.create( new Login() );
  }
}

describe('LoginAccountComponent', () => {
  let component: LoginAccountComponent;
  let fixture: ComponentFixture<LoginAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAccountComponent ],
      providers: [
        { provide: LoginAccountService, useClass: MockLoginAccountService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
