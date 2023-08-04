import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Features } from './core/enum';
import { WeatherReducer } from './featured/weather/store/weather.reducer';
import { WeatherService } from './featured/weather/services/weather.service';
import { WEATHER_CONFIG, WEATHER_DI_CONFIG } from './featured/weather/config';
import { effectList } from './featured/weather/store';
import { ErrorLogger } from './core/services';
import { NotificationService } from './core/services/notification.service';
import { HandleErrorService } from './core/services/handle-error.service';

const routes: Routes = [
  {
    path: '',
    providers: [
      ErrorLogger,
      NotificationService,
      HandleErrorService,
      WeatherService,
      {
        provide: WEATHER_CONFIG,
        useValue: WEATHER_DI_CONFIG,
      },
      importProvidersFrom(
        StoreModule.forFeature(Features.Weather, WeatherReducer),
        EffectsModule.forFeature(effectList)
      ),
    ],
    loadComponent: () =>
      import(
        './featured/weather/pages/weather.page/weather.page.component'
      ).then(m => m.WeatherPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
    //,component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
