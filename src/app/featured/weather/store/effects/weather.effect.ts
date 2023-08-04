import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, shareReplay, tap } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
import * as WeatherActions from './../weather.action';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private service: WeatherService
  ) {}

  GetWeatherByCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.GetWeatherAction),
      switchMap(({ city }) =>
        this.service.getWeatherByCity(city).pipe(
          map(entities => WeatherActions.GetWeatherActionSuccess({ entities })),
          shareReplay(1),
          catchError(error => {
            return of(WeatherActions.GetWeatherActionFail({ error }));
          })
        )
      )
    )
  );
}
