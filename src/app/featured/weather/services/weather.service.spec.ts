import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Weather } from '../models';
import { WEATHER_CONFIG, WEATHER_DI_CONFIG } from '../config';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WeatherService,
        {
          provide: WEATHER_CONFIG,
          useValue: WEATHER_DI_CONFIG,
        },
      ],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Create team', async () => {
    const expectedResult: Weather = {
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

    const spyCreate: jasmine.Spy = spyOn(
      service,
      'getWeatherByCity'
    ).and.returnValue(of(expectedResult));
    service.getWeatherByCity('Isfahan').subscribe(result => {
      expect(result).toBe(expectedResult);
    });

    expect(spyCreate).toHaveBeenCalledWith('Isfahan');
  });
});
