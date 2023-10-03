import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.title}>{location.name}, {location.region}</Text>
            <Image
                source={{uri:`https:${current.condition.icon}`}}
                style={styles.image}
            />
            <View style={styles.conditionsContainer}>
                <Text style={styles.condition}>{current.condition.text}</Text>
                <Text style={styles.temp}>{current.temp_f}&deg;F</Text>
            </View> 

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 100
    },
    title: {
        fontSize: 48,
        color: 'white'
    },
    temp: {
        fontWeight: '500',
        color: 'white',
        fontSize: 64
    },
    image: {
        width: 200, 
        height: 200
    },
    conditionsContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: -10
    },
    condition: {
        color: 'white',
        fontSize: 36,
    }
})

export default CurrentWeather; 