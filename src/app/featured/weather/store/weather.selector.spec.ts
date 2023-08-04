import { MockWeatherResult } from '../mock/data.mock';
import { selectWeather, selectWeatherLoading } from './weather.selector';
import { initialWeatherState } from './weather.state';

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
