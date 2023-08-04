import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { SharedModule } from 'src/app/shared/shared.module';
import { Weather } from '../../models';
import { WeatherState, selectWeather } from '../../store';

@Component({
  selector: 'app-card-weather',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWeatherComponent {
  weather_result$!: Observable<Weather>;
  constructor(private store: Store<WeatherState>) {}

  ngOnInit(): void {
    this.weather_result$ = this.store
      .pipe(select(selectWeather))
      .pipe(shareReplay(1));
  }
}
