import {
  MockWeatherResult,
  MockWeatherResultState,
  WeatherActions,
  WeatherReducer,
  initialWeatherState,
} from '@weather/featured';

describe('Store: Weather Reducer', () => {
  initialWeatherState.entities = MockWeatherResult;
  it('should get selectWeather ', () => {
    expect(
      WeatherReducer(
        initialWeatherState,
        WeatherActions.GetWeatherAction({ city: 'Isfahan' })
      )
    ).toEqual(MockWeatherResultState);
  });
});
