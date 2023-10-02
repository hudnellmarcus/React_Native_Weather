import axios from "axios";
import { WeatherData } from "../models/WeatherData";

export const fetchWeatherData = async (city: string) => {
    try {
        const apiKey = '89e9d9cf56fa4af2a1e174847230210';
        
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        
        const response = await axios.get(apiUrl);  
        const data: WeatherData = response.data; 

        console.log(data)
        return data;
    
    }   catch (error) {
            console.error('Error fetching weather data:', error);
    }
};