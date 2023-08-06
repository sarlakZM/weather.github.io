import { EntityState } from "@weather/core";
import { WeatherModel } from "@weather/featured";


export interface WeatherState extends EntityState<WeatherModel> {}

export const initialWeatherState: WeatherState = {
  entities: null,
  isLoading: false,
  error: '',
};
