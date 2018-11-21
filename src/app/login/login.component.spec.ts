/*
 * Copyright (c) 2018.  Andrew Newton
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
