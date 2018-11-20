import { TestBed } from '@angular/core/testing';

import { JwtAuthenticationServiceService } from './jwt-authentication-service.service';
import {AppConfigService} from "../app-config.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

class MockAppConfigService {
  getConfig() {
    return {
      "menuName" : "foo",
      "backendUrl" : "http://localhost"
    }
  }
}
describe('JwtAuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [
      { provide: AppConfigService, useClass: MockAppConfigService }
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
  }));

  it('should be created', () => {
    const service: JwtAuthenticationServiceService = TestBed.get(JwtAuthenticationServiceService);
    expect(service).toBeTruthy();
  });
});
