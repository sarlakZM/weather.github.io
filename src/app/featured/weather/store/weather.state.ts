import { EntityState } from 'src/app/core/store/state';
import { Weather } from '../models';

export interface WeatherState extends EntityState<Weather> {}

export const initialWeatherState: WeatherState = {
  entities: null,
  isLoading: false,
  error: '',
};
