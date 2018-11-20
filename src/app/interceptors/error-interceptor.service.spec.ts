import { TestBed } from '@angular/core/testing';

import { ErrorInterceptorService } from './error-interceptor.service';
import {HttpClientModule} from "@angular/common/http";
import {JwtAuthenticationServiceService} from "../services/jwt-authentication-service.service";

class MockJwtAuthService {
  login( id: string, password: string ) {}
  logout() {}
}

describe('ErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [
      HttpClientModule,
      { provide: JwtAuthenticationServiceService, useClass: MockJwtAuthService }
    ]
  }));

  it('should be created', () => {
    const service: ErrorInterceptorService = TestBed.get(ErrorInterceptorService);
    expect(service).toBeTruthy();
  });
});
