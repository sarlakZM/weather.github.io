import * as WeatherActions from './weather.action';

describe('Store: Weather action', () => {
  it('should call GetWeatherAction Action', () => {
    expect(WeatherActions.GetWeatherAction({ city: 'Isfahan' })).toBeTruthy();
  });
});
