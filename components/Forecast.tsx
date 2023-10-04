import React, { useEffect, useState } from 'react'; 
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useCityInput } from '../context/CityContext';
import { getForecast } from '../hooks/useForecast';
import { ForecastData } from '../models/ForecastData';




const ForecastComponent = () => {
    const { city, setCity } = useCityInput(); 
    const [ forecast, setForecast ] = useState<ForecastData[] | null>(null)
    
    
    useEffect(() => {
        const fetchForecast = async () => {
            if (!city) {
                return
            }
        
            try {
                const results = await getForecast(city);
                setForecast(results);
                //console.log('forecast:', forecast);
                return
            } catch (error) {
                console.error('Error fetching forecast data', error);
            }
        }
            fetchForecast(); 

    },[city])



    return (
        <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}
            style={{ height: 200 }}
        >   
           { /* forecast != null && forecast.forecast && forecast.forecast.forecastday ? (
            forecast.map((data, index) => (
                
                <View key={index}>
                    {data.forecast.forecastday.map((day, dayIndex) => (
                        <View key={dayIndex}>
                            <Text>{day.date}</Text>
                            <Text>{day.day.condition.text}</Text>
                        </View>
                    ))}
                </View>
                ))
            ) : (
                <Text>No daily forecast</Text>
    
            ) 8*/}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    forecast: {
    }
})

export default ForecastComponent; 