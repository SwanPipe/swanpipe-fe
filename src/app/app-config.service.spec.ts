import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppConfigService } from './app-config.service';

describe('AppConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: AppConfigService = TestBed.get(AppConfigService);
    expect(service).toBeTruthy();
  });
});
