import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { WeatherEffects } from './weather.effect';
import { MockWeatherResult, WEATHER_CONFIG, WEATHER_DI_DB_CONFIG, WeatherActions, WeatherReducer, WeatherService } from '@weather/featured';
import { SharedModule } from '@weather/shared';



describe('Store: Weather Effect', () => {
  let effects: WeatherEffects;
  let actions1: Observable<any>;
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        WeatherService,
        provideEffects(WeatherEffects),
        provideStore(WeatherReducer),
        {
          provide: WEATHER_CONFIG,
          useValue: WEATHER_DI_DB_CONFIG,
        },
        provideMockActions(() => actions1),
      ],
    });
    effects = TestBed.inject(WeatherEffects);
    service = TestBed.inject(WeatherService);
  });

  it('should get weather with action', () => {
    const action = WeatherActions.GetWeatherAction({ city: 'Isfahan' });
    const completion = WeatherActions.GetWeatherActionSuccess({
      entities: MockWeatherResult,
    });

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    actions1 = hot('--a-', { a: action });
    // actions.next(hot('-a', { a: action }));
    const expected = cold('--b', { b: completion });

    const response = cold('-a|', { a: MockWeatherResult });
    spyOn(service, 'getWeatherByCity').and.returnValue(response);

    effects.GetWeatherByCity$.subscribe(result => {
      expect(result).toEqual(completion);
    });
  });
});
