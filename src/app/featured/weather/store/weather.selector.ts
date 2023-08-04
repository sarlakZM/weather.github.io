import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.state';
import { Features } from 'src/app/core/enum';

export const selectFeature = createFeatureSelector<WeatherState>(
  Features.Weather
);

export const selectWeather = createSelector(
  selectFeature,
  (state: WeatherState) => state.entities
);

export const selectWeatherLoading = createSelector(
  selectFeature,
  (state: WeatherState) => state.isLoading
);
