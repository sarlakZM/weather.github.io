import {
  MockWeatherResult,
  initialWeatherState,
  selectWeather,
  selectWeatherLoading,
} from '@weather/featured';

describe('Store: Weather Selector', () => {
  it('should check loading', () => {
    expect(selectWeatherLoading.projector(initialWeatherState)).toBeFalse();
  });
  it('should get weather', () => {
    initialWeatherState.entities = MockWeatherResult;

    const weather = selectWeather.projector(initialWeatherState);
    expect(weather).toEqual(MockWeatherResult);
  });
});
