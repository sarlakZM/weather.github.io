import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeaturesEnum } from '@weather/core';
import { WeatherState } from '@weather/featured';

export const selectFeature = createFeatureSelector<WeatherState>(
  FeaturesEnum.Weather
);

export const selectWeather = createSelector(
  selectFeature,
  (state: WeatherState) => state.entities
);

export const selectWeatherLoading = createSelector(
  selectFeature,
  (state: WeatherState) => state.isLoading
);
