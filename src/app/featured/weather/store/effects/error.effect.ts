import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import {
  ErrorLogger,
  HandleErrorService,
  NotificationService,
} from '@weather/core';
import { WeatherActions } from '@weather/featured';

@Injectable()
export class ErrorEffects {
  constructor(
    private readonly actions$: Actions,
    @Inject(ErrorHandler) private readonly errorHandler: any,
    private readonly notificationService: NotificationService,
    private readonly handleErrorService: HandleErrorService,
    private errorLogger: ErrorLogger
  ) {}

  requestFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(WeatherActions.GetWeatherActionFail),
        tap(({ error }: { error: string }) => {
          const msg = this.handleErrorService.handleError(error);
          this.notificationService.error('Error', msg);

          return this.errorLogger.handleError(error);
        })
      ),
    { dispatch: false }
  );
}
