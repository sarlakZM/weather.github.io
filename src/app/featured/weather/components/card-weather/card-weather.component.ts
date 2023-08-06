import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { SharedModule } from '@weather/shared';
import { WeatherModel, WeatherState, selectWeather } from '@weather/featured';


@Component({
  selector: 'app-card-weather',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWeatherComponent {
  weather_result$!: Observable<WeatherModel>;
  constructor(private store: Store<WeatherState>) {}

  ngOnInit(): void {
    this.weather_result$ = this.store
      .pipe(select(selectWeather),
                    shareReplay(1))
  }
}
