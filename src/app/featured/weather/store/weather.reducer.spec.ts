import { WeatherReducer } from './weather.reducer';
import { initialWeatherState } from './weather.state';
import * as WeatherActions from './weather.action';
import { MockWeatherResult, MockWeatherResultState } from '../mock/data.mock';

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
