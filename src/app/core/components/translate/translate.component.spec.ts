import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateComponent } from './translate.component';
import {
  DEFAULT_LANGUAGE_CONST,
  httpTranslateLoaderFactory,
} from '@weather/core';

describe('TranslateComponent', () => {
  let component: TranslateComponent;
  let fixture: ComponentFixture<TranslateComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
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
        NgFor,
        MatFormFieldModule,
        MatSelectModule,
        TranslateComponent,
      ],
      providers: [TranslateService],
    });
    fixture = TestBed.createComponent(TranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    translateService = TestBed.inject(TranslateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call translate function', () => {
    spyOn(translateService, 'use');
    component.translateLanguageTo(DEFAULT_LANGUAGE_CONST);
    expect(translateService.use).toHaveBeenCalledWith(DEFAULT_LANGUAGE_CONST);
  });
});
