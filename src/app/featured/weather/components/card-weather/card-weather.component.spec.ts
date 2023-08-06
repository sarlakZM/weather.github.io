import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardWeatherComponent } from './card-weather.component';
import {
  MockErrorLogger,
  MockWeatherResult,
  MockWeatherResultState,
  WEATHER_CONFIG,
  WEATHER_DI_DB_CONFIG,
  WeatherReducer,
  WeatherService,
  WeatherState,
  effectList,
  selectWeather,
} from '@weather/featured';
import { SharedModule } from '@weather/shared';
import {
  CoreModule,
  ErrorLogger,
  HandleErrorService,
  NotificationService,
} from '@weather/core';

describe('CardWeatherComponent', () => {
  let component: CardWeatherComponent;
  let fixture: ComponentFixture<CardWeatherComponent>;
  let store: Store<WeatherState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CardWeatherComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
      ],
      providers: [
        provideEffects(effectList),
        provideStore(WeatherReducer),
        Store,
        NotificationService,
        HandleErrorService,
        ErrorLogger,
        WeatherService,
        {
          provide: WEATHER_CONFIG,
          useValue: WEATHER_DI_DB_CONFIG,
        },
        {
          provide: ErrorLogger,
          useValue: MockErrorLogger,
        },
      ],
    });
    fixture = TestBed.createComponent(CardWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get weather by selector', () => {
    const status = selectWeather.projector(MockWeatherResultState);
    expect(status).toEqual(MockWeatherResult);
  });
});
