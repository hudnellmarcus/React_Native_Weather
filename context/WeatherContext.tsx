import React, { createContext, useContext, useState, } from 'react';
import { Axios } from 'axios';

import { WeatherData, WeatherContextType } from '../models/WeatherData';
import { WeatherProviderProps } from '../models/WeatherProviderProps';
import { useCurrentWeather } from '../hooks/useCurrentWeather';

//const API_URL: string = `http://api.weatherapi.com/v1/current.json?key=89e9d9cf56fa4af2a1e174847230210&q=London&aqi=no` 

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider'); 
    }
    return context; 
}

export const WeatherProvider = ({ children } : WeatherProviderProps) => {
    

    return (
        <
    )
 }

