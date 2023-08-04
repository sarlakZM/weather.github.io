import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, WeatherConfig } from '../models';
import { WEATHER_CONFIG } from '../config';
import { BaseService } from 'src/app/shared/services';

@Injectable()
export class WeatherService extends BaseService<Weather> {
  constructor(
    httpClient: HttpClient,
    @Inject(WEATHER_CONFIG) private config: WeatherConfig
  ) {
    super(httpClient, config.weatherDbBaseURL);
  }

  getWeatherByCity(city: string): Observable<Weather> {
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
