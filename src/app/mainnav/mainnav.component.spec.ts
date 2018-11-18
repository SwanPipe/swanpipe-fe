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

class MockAppConfigService {
  getConfig() {
    return {
      "menuName" : "foo"
    }
  }
}

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
        { provide: AppConfigService, useClass: MockAppConfigService }
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
