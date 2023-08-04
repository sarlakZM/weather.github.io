import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NabvarComponent } from './nabvar.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { httpTranslateLoaderFactory } from '../../core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DEFAULT_LANGUAGE } from '../../constants';

describe('NabvarComponent', () => {
  let component: NabvarComponent;
  let fixture: ComponentFixture<NabvarComponent>;

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
        NabvarComponent,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
      ],
      providers: [TranslateService],
    });

    fixture = TestBed.createComponent(NabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
