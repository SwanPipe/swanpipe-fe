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
