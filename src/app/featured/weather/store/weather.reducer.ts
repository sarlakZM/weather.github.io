import { createReducer, on } from '@ngrx/store';

import { initialWeatherState } from './weather.state';
import { WeatherActions } from './weather.action';

export const WeatherReducer = createReducer(
  initialWeatherState,
  on(WeatherActions.GetWeatherActionSuccess, (state, { entities }) => ({
    ...state,
    entities,
    isLoading: false,
  })),
  on(WeatherActions.GetWeatherAction, state => ({ ...state, isLoading: true })),
  on(WeatherActions.GetWeatherActionFail, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  }))
);
