import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import {
  MockWeatherResult,
  WEATHER_CONFIG,
  WEATHER_DI_DB_CONFIG,
  WeatherService,
} from '@weather/featured';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WeatherService,
        {
          provide: WEATHER_CONFIG,
          useValue: WEATHER_DI_DB_CONFIG,
        },
      ],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Create team', async () => {
    const spyCreate: jasmine.Spy = spyOn(
      service,
      'getWeatherByCity'
    ).and.returnValue(of(MockWeatherResult));
    service.getWeatherByCity('Isfahan').subscribe(result => {
      expect(result).toBe(MockWeatherResult);
    });

    expect(spyCreate).toHaveBeenCalledWith('Isfahan');
  });
});
