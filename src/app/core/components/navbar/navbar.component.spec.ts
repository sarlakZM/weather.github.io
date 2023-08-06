import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

import {
  DEFAULT_LANGUAGE_CONST,
  NavbarComponent,
  TranslateComponent,
  httpTranslateLoaderFactory,
} from '@weather/core';

describe('navbar', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateComponent,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: httpTranslateLoaderFactory,
            deps: [HttpClient],
          },
          defaultLanguage: DEFAULT_LANGUAGE_CONST,
        }),
        BrowserAnimationsModule,
        HttpClientModule,
        NavbarComponent,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
      ],
      providers: [TranslateService],
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
