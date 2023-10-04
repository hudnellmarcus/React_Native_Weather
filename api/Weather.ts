import axios from "axios";
import { WeatherData } from "../models/WeatherData";

const apiKey = '89e9d9cf56fa4af2a1e174847230210';

const searchUrl = (city: string) => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`



export const fetchWeatherData = async (city: string) => {
    try {
        
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        
        const response = await axios.get(apiUrl);  
        const data: WeatherData = response.data; 

        console.log(data)
        return data;
    
    }   catch (error) {
            console.error('Error fetching weather data:', error);
    }
};