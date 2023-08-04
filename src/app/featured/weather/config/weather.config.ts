import { InjectionToken } from '@angular/core';
import { WeatherConfig } from '../models';

export const WEATHER_CONFIG = new InjectionToken<WeatherConfig>(
  'weather.config'
);

export const WEATHER_DI_CONFIG: WeatherConfig = {
  weatherDbBaseURL: 'https://api.openweathermap.org/data/2.5/',
  weatherDbApiKey: '6ee399a78111088270fe45c0c979f178',
};
