import { Injectable } from '@angular/core';
import { Weather } from '../models';
import { WeatherState } from '../store';

export const MockWeatherResult: Weather = {
  coord: {
    lon: 51.6776,
    lat: 32.6572,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 37.8,
    feels_like: 34.72,
    temp_min: 37.8,
    temp_max: 37.8,
    pressure: 1003,
    humidity: 8,
    sea_level: 1003,
    grnd_level: 847,
  },
  visibility: 10000,
  wind: {
    speed: 2.98,
    deg: 119,
    gust: 2.77,
  },
  clouds: {
    all: 0,
  },
  dt: 1690974009,
  sys: {
    type: 1,
    id: 7460,
    country: 'IR',
    sunrise: 1690940853,
    sunset: 1690990290,
  },
  timezone: 12600,
  id: 418863,
  name: 'Isfahan',
  cod: 200,
};

export const MockWeatherResultState: WeatherState = {
  entities: MockWeatherResult,
  isLoading: true,
  error: '',
};

@Injectable()
export class MockErrorLogger {
  handleError(error: any): void {}
}
