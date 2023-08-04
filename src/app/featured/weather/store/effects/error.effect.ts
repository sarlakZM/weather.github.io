import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as WeatherActions from '../weather.action';
import { ErrorLogger } from 'src/app/core/services';
import { HandleErrorService } from 'src/app/core/services/handle-error.service';
import { NotificationService } from 'src/app/core/services/notification.service';

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
