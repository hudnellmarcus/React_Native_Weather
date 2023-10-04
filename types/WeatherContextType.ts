import { WeatherData } from "../models/WeatherData";

export type WeatherContextType = {
    // fetchWeatherData: ( city: string) => Promise<WeatherData | undefined>
     //setCity: React.Dispatch<React.SetStateAction<string>>; 
     weatherData: WeatherData | null; 
 };