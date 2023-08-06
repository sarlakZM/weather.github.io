import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  ErrorLogger,
  FeaturesEnum,
  HandleErrorService,
  NotificationService,
} from './core';
import {
  WEATHER_CONFIG,
  WEATHER_DI_DB_CONFIG,
  WeatherReducer,
  WeatherService,
  effectList,
} from './featured';

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
        useValue: WEATHER_DI_DB_CONFIG,
      },
      importProvidersFrom(
        StoreModule.forFeature(FeaturesEnum.Weather, WeatherReducer),
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
