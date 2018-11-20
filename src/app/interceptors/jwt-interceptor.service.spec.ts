import { TestBed } from '@angular/core/testing';

import { JwtInterceptorService } from './jwt-interceptor.service';
import {HttpClientModule} from "@angular/common/http";

describe('JwtInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: JwtInterceptorService = TestBed.get(JwtInterceptorService);
    expect(service).toBeTruthy();
  });
});
