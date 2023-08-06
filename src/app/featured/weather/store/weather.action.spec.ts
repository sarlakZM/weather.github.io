import { WeatherActions } from "@weather/featured";

describe('Store: Weather action', () => {
  it('should call GetWeatherAction Action', () => {
    expect(WeatherActions.GetWeatherAction({ city: 'Isfahan' })).toBeTruthy();
  });
});
