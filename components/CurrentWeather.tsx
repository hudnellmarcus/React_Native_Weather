import React from "react";
import { View, Text } from "react-native";
import { useWeather } from "../context/WeatherContext";



const CurrentWeather = () => {
    const { weatherData } = useWeather(); 

    if (!weatherData) {
        return <Text>Loading..</Text>
    };

    const { location, current } = weatherData    
    
    if (!location || !current) {
        return <Text>Weather info unavailable</Text>
    }

    return (
        <View>
            <Text>{current.temp_f}</Text>
        </View>
    )
};

export default CurrentWeather; 