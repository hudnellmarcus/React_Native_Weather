
export interface WeatherData {
    temp_c: number;
    temp_f: number;
    condition: {
        text: string;
        icon: string;
    }
};

export type WeatherContextType = {
    fetchWeatherData: ( city: string) => Promise<WeatherData | undefined>
    setCity: React.Dispatch<React.SetStateAction<string>>; 
    weatherData: WeatherData | null; 

}