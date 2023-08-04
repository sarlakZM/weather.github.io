export type Weather = WeatherCity | null;

interface WeatherGeo {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}

interface WeatherCity {
  coord: Coord;
  weather: DetailWeather[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Current extends CommonDetail {}
interface Hourly extends CommonDetail {}

type Daily = CommonDetail & {
  moonrise: number;
  moonset: number;
  moon_phase: number;
  rain: number;
};

interface CommonDetail {
  dt: number;
  temp: number | Temp;
  feels_like: number | FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: DetailWeather[];

  sunrise?: number;
  sunset?: number;
  visibility?: number;
  pop?: number;
}

interface DetailWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface Temp extends FeelsLike {
  min: number;
  max: number;
}

interface Coord {
  lon: number;
  lat: number;
}
