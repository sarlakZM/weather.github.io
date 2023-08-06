import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import * as Sentry from '@sentry/angular-ivy';
import { Router } from '@angular/router';
import { ErrorLogger } from './services';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './components';
import { ToastComponent } from '@weather/shared';
import { CacheInterceptor } from './interceptors';
import { DEFAULT_LANGUAGE_CONST } from './constants';


// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: DEFAULT_LANGUAGE_CONST,
    }),
    NavbarComponent,
    ToastrModule.forRoot({
      timeOut: 6000,
      tapToDismiss: false,
      preventDuplicates: false,
      maxOpened: 0,
      enableHtml: true,
      closeButton: true,
      toastComponent: ToastComponent,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorLogger,
      deps: [],
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  exports: [NavbarComponent],
})
export class CoreModule {}
