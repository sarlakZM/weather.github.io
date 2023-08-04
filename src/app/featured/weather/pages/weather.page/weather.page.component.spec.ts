import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationService } from 'src/app/core/services/notification.service';
import { HandleErrorService } from 'src/app/core/services/handle-error.service';
import { ErrorLogger } from 'src/app/core/services';
import {
  MockErrorLogger,
  MockWeatherResult,
  MockWeatherResultState,
} from '../../mock/data.mock';
import { WeatherService } from '../../services';
import { WEATHER_CONFIG, WEATHER_DI_CONFIG } from '../../config';
import {
  WeatherReducer,
  WeatherState,
  effectList,
  selectWeather,
  selectWeatherLoading,
} from '../../store';
import { WeatherPageComponent } from './weather.page.component';

describe('WeatherPageComponent', () => {
  let component: WeatherPageComponent;
  let fixture: ComponentFixture<WeatherPageComponent>;
  let store: Store<WeatherState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        WeatherPageComponent,
        ToastrModule.forRoot({
          timeOut: 6000,
          tapToDismiss: false,
          preventDuplicates: false,
          maxOpened: 0,
          enableHtml: true,
          closeButton: true,
          // toastComponent: ToastComponent,
        }),
      ],
      providers: [
        provideEffects(effectList),
        provideStore(WeatherReducer),
        Store,
        NotificationService,
        HandleErrorService,
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
    fixture = TestBed.createComponent(WeatherPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Dispatch GetWeatherAction by city name', () => {
    const spy: jasmine.Spy = spyOn(component, 'selectedCity').and.callThrough();
    component.selectedCity('');
    expect(spy).toHaveBeenCalled();
  });

  it('Get weather by selector', () => {
    const status = selectWeather.projector(MockWeatherResultState);
    expect(status).toEqual(MockWeatherResult);
  });
  it('Get weather loading by selector', () => {
    const status = selectWeatherLoading.projector(MockWeatherResultState);
    expect(status).toBeTruthy();
  });
});
