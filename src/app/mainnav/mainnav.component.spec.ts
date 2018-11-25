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

import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { MainnavComponent } from './mainnav.component';

import {NO_ERRORS_SCHEMA} from "@angular/core";
import {AppConfigService} from "../app-config.service";

import { MockAppConfigService } from "../mocks/mock-app-config-service";
import { MockJwtAuthService } from "../mocks/mock-jwt-auth-service";
import {JwtAuthenticationService} from "../services/jwt-authentication.service";

describe('MainnavComponent', () => {
  let component: MainnavComponent;
  let fixture: ComponentFixture<MainnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainnavComponent ],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        HttpClientModule,
      ],
      providers: [
        { provide: AppConfigService, useClass: MockAppConfigService },
        { provide: JwtAuthenticationService, useClass: MockJwtAuthService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
