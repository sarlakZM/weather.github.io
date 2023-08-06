import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '@weather/shared';
import {
  WEATHER_CONFIG,
  WeatherConfigModel,
  WeatherModel,
} from '@weather/featured';

@Injectable()
export class WeatherService extends BaseService<WeatherModel> {
  constructor(
    httpClient: HttpClient,
    @Inject(WEATHER_CONFIG) private config: WeatherConfigModel
  ) {
    super(httpClient, config.weatherDbBaseURL);
  }

  getWeatherByCity(city: string): Observable<WeatherModel> {
    this.path = `weather`;
    const params = new HttpParams({
      fromObject: {
        q: city,
        appid: this.config.weatherDbApiKey,
        units: 'metric',
      },
    });
    return this.get(params);
  }
}
