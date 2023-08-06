import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Store, select } from '@ngrx/store';
import { SharedModule } from '@weather/shared';
import {
  Observable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  shareReplay,
  switchMap,
  timer,
} from 'rxjs';

import {
  WeatherActions,
  WeatherState,
  selectWeatherLoading,
} from '@weather/featured';
import { CardWeatherComponent } from '../../components/card-weather/card-weather.component';

@Component({
  standalone: true,
  selector: 'app-weather.page',
  templateUrl: './weather.page.component.html',
  styleUrls: ['./weather.page.component.scss'],
  imports: [SharedModule, CardWeatherComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPageComponent implements OnInit {
  loading$!: Observable<boolean>;

  constructor(
    // private swUpdate: SwUpdate,
    private store: Store<WeatherState>
  ) {
    this.store.dispatch(WeatherActions.GetWeatherAction({ city: 'Isfahan' }));
  }

  ngOnInit(): void {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.versionUpdates.subscribe(() => {
    //     if (confirm('New version available. Load New Version?')) {
    //       window.location.reload();
    //     }
    //   });
    // }
    this.loading$ = this.store.pipe(
      select(selectWeatherLoading),
      shareReplay()
    );
  }

  selectedCity(event: any) {
    timer(500)
      .pipe(
        map(_ => (<HTMLInputElement>event.target).value),
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((value): any =>
          this.store.dispatch(WeatherActions.GetWeatherAction({ city: value }))
        ),
        catchError((error): Observable<boolean> => of(false))
      )
      .subscribe();
  }
}
