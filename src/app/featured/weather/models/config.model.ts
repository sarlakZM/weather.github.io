import { Config } from 'src/app/core/models';

export type WeatherConfig = {
  [Key in keyof Config as `weatherDb${Capitalize<Key>}`]: Config[Key];
};
