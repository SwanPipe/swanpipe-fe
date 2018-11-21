import { TestBed } from '@angular/core/testing';

import { LoginAccountService } from './login-account.service';

describe('LoginAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginAccountService = TestBed.get(LoginAccountService);
    expect(service).toBeTruthy();
  });
});
