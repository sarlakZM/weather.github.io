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
import { httpTranslateLoaderFactory } from '../../core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_LANGUAGE } from '../../constants';
import { TranslateComponent } from './translate.component';

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
          defaultLanguage: DEFAULT_LANGUAGE,
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
    component.translateLanguageTo(DEFAULT_LANGUAGE);
    expect(translateService.use).toHaveBeenCalledWith(DEFAULT_LANGUAGE);
  });
});
