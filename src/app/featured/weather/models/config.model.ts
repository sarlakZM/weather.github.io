import { ConfigModel } from "@weather/core";

export type WeatherConfigModel = {
  [Key in keyof ConfigModel as `weatherDb${Capitalize<Key>}`]: ConfigModel[Key];
};
