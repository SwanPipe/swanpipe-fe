import { TestBed } from '@angular/core/testing';

import { JwtAuthenticationService } from './jwt-authentication.service';
import {AppConfigService} from "../app-config.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import { MockAppConfigService } from "../mocks/mock-app-config-service";

describe('JwtAuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [
      { provide: AppConfigService, useClass: MockAppConfigService }
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
  }));

  it('should be created', () => {
    const service: JwtAuthenticationService = TestBed.get(JwtAuthenticationService);
    expect(service).toBeTruthy();
  });
});
