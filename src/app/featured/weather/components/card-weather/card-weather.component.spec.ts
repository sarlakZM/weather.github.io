import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CoreModule } from 'src/app/core/core.module';
import { HandleErrorService } from 'src/app/core/services/handle-error.service';
import { ErrorLogger } from 'src/app/core/services';
import {
  MockErrorLogger,
  MockWeatherResult,
  MockWeatherResultState,
} from '../../mock/data.mock';
import {
  WeatherReducer,
  WeatherState,
  effectList,
  selectWeather,
} from '../../store';
import { WeatherService } from '../../services';
import { WEATHER_CONFIG, WEATHER_DI_CONFIG } from '../../config';
import { CardWeatherComponent } from './card-weather.component';

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
          useValue: WEATHER_DI_CONFIG,
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
