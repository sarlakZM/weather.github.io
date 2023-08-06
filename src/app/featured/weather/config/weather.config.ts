import { InjectionToken } from '@angular/core';
import { WeatherConfigModel } from '@weather/featured';

export const WEATHER_CONFIG = new InjectionToken<WeatherConfigModel>(
  'weather.config'
);

export const WEATHER_DI_DB_CONFIG: WeatherConfigModel = {
  weatherDbBaseURL: 'https://api.openweathermap.org/data/2.5/',
  weatherDbApiKey: '6ee399a78111088270fe45c0c979f178',
};
