import { createAction, props } from '@ngrx/store';
import { WeatherModel } from '@weather/featured';

const GetWeatherAction = createAction(
  '[Weather API] Get Weather',
  props<{ city: string }>()
);

const GetWeatherActionSuccess = createAction(
  '[Weather API] Get Weather Success',
  props<{ entities: WeatherModel }>()
);

const GetWeatherActionFail = createAction(
  '[Weather API] Get Weather Fail',
  props<{ error: any }>()
);

export const WeatherActions = {
  GetWeatherAction,
  GetWeatherActionFail,
  GetWeatherActionSuccess,
};
