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

import { TestBed } from '@angular/core/testing';

import { ErrorInterceptorService } from './error-interceptor.service';
import {HttpClientModule} from "@angular/common/http";
import {JwtAuthenticationService} from "../services/jwt-authentication.service";

import { MockJwtAuthService } from "../mocks/mock-jwt-auth-service";

describe('ErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [
      HttpClientModule,
      { provide: JwtAuthenticationService, useClass: MockJwtAuthService }
    ]
  }));

  it('should be created', () => {
    const service: ErrorInterceptorService = TestBed.get(ErrorInterceptorService);
    expect(service).toBeTruthy();
  });
});
