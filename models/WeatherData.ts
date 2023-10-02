
export interface WeatherData {
    temp_c: number;
    temp_f: number;
    condition: {
        text: string;
        icon: string;
    }
};

export type WeatherContextType = {
    fetchWeatherData: ( data: WeatherData) => Promise<void>
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>; 
    weatherData: WeatherData | null; 

}