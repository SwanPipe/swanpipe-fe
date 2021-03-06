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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginAccountComponent} from './login-account.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

import {MockAccountInfoService} from "../mocks/mock-account-info-service";
import {AccountInfoService} from "../services/account-info.service";

import { MatTableModule } from "@angular/material";

describe('LoginAccountComponent', () => {
  let component: LoginAccountComponent;
  let fixture: ComponentFixture<LoginAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginAccountComponent,
      ],
      imports: [
        MatTableModule
      ],
      providers: [
        { provide: AccountInfoService, useClass: MockAccountInfoService }
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
