import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { WeatherData } from '../models/WeatherData';
import { WeatherProviderProps } from '../models/WeatherProviderProps';
import { WeatherContextType } from '../types/WeatherContextType';
import { useCityInput } from './CityContext';


const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider'); 
    }
    return context; 
}

export const fetchWeather = async (city: string): Promise<WeatherData | null> => {
    try {
        const apiKey = '89e9d9cf56fa4af2a1e174847230210';
    
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    
        const response = await axios.get(apiUrl);  
        const data: WeatherData = response.data; 

        //console.log(data)
        //console.log(`city: ${city}`)
        return data;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null
        }
}; 

export const WeatherProvider = ({ children } : WeatherProviderProps) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
    const { city } = useCityInput(); 

    useEffect(() => {
    
        const fetchWeatherData = async (city: string) => {
            try {
                const data = await fetchWeather(city)
                //console.log(data)
                //console.log(`city: ${city}`)
                setWeatherData(data);
        
            } catch (error) {
                console.error('Error fetching weather data:', error);
                }
      }; 
            fetchWeatherData(city)

    },[city])


    return (
        <WeatherContext.Provider
            value={{
                weatherData,
            }}>
                { children }
        </WeatherContext.Provider>
        
    )
};

