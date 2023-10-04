import React from 'react';
import axios from 'axios';
import { ForecastData } from '../models/ForecastData';


export const getForecast = async (city: string): Promise<ForecastData[]> => {
    const apiKey = '89e9d9cf56fa4af2a1e174847230210'
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`

    const response = await axios.get(forecastUrl)
    const data: ForecastData[]  = response.data

    //console.log(searchUrl)
    //console.log(data)
    return(data)
}