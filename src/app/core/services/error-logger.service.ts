import { isPlatformBrowser } from '@angular/common';
import { ErrorHandler, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as Sentry from '@sentry/angular-ivy';
import { SENTRY_DNS_CONFIG } from '../config/config';

@Injectable()
export class ErrorLogger implements ErrorHandler {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      Sentry.init({
        dsn: SENTRY_DNS_CONFIG,
        // release: sentry.environment prod,
        integrations: [
          new Sentry.BrowserTracing({
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: ['localhost', 'https:yourserver.io/api/'],
            routingInstrumentation: Sentry.routingInstrumentation,
          }),
          new Sentry.Replay(),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      });
    }
  }

  handleError(error: any): void {
    if (isPlatformBrowser(this.platformId)) {
      const eventId = Sentry.captureException(error.originalError || error);
      Sentry.showReportDialog({ eventId });
    }
  }
}
