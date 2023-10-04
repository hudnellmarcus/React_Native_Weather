import { CurrentWeather } from "./CurrentWeather";
import { Location } from "./Location";

export interface WeatherData {
    location: Location; 
    current: CurrentWeather; 
};
