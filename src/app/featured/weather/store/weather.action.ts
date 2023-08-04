import { createAction, props } from '@ngrx/store';
import { Weather } from '../models';

export const GetWeatherAction = createAction(
  '[Weather API] Get Weather',
  props<{ city: string }>()
);

export const GetWeatherActionSuccess = createAction(
  '[Weather API] Get Weather Success',
  props<{ entities: Weather }>()
);

export const GetWeatherActionFail = createAction(
  '[Weather API] Get Weather Fail',
  props<{ error: any }>()
);
