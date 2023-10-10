import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import { useWeather } from "../context/WeatherContext";
import { useCityInput } from "../context/CityContext";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDroplet, faClock, faWind } from "@fortawesome/free-solid-svg-icons";



const CurrentWeather = () => {
    const { weatherData } = useWeather(); 
    const { city } = useCityInput();  

    if (!weatherData) {
        return (  
        <LinearGradient
            colors={['rgba(228, 238, 100, 1)',  
                     'rgba(69, 82, 252, 1)', 
                     'rgba(69, 82, 252, 0.5)', 
                    ]}
            style={styles.gradient}
        >

            <View style={styles.loading}>
                <Text style={styles.condition}>Choose your city to see the forecast.</Text>
            </View>
        </LinearGradient>
        )
    };

    const { location, current } = weatherData 
    const locationName = location.name + ', ' + location.country
    const currentTime = new Date(location.localtime).getHours();

    //console.log(currentTime)    

    const isNightTime = currentTime > 19 || currentTime < 7;  
    const gradients = isNightTime ? 
    [   'rgba(6, 12, 80, 1.0)',  
        'rgba(94, 29, 128, 1.0)', 
        'rgba(6, 12, 80, 0.5)', 
    ] : 
    [   'rgba(228, 238, 100, 1)',  
        'rgba(69, 82, 252, 1)', 
        'rgba(69, 82, 252, 0.5)', 
    ]           
    
    if (!location || !current) {
        return <Text>Weather info unavailable</Text>
    }

    return (  
        <LinearGradient
            colors={gradients} 
        
            style={styles.gradient}
        >
            <View style={styles.container}>
                <Text style={{ ...styles.title, fontSize: locationName.length > 29 ? 18 : 30}}>
                {locationName}
                </Text>
                <Image
                source={{uri:`https:${current.condition.icon}`}}
                style={styles.image}
                />
            <View style={styles.conditionsContainer}>
                <Text style={styles.condition}>{current.condition.text}</Text>
                <Text style={styles.temp}>{current.temp_f.toFixed(0)}&deg;F</Text>
            </View> 
            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <FontAwesomeIcon icon={faDroplet} size={30}/>
                    <Text style={styles.detailsText}>{current.humidity}%</Text>
                </View>
                <View style={styles.details}>
                    <FontAwesomeIcon icon={faClock} size={30}/>
                    <Text style={styles.detailsText}>{location.localtime.split(' ')[1]}</Text>
                </View>
                    <View style={styles.details}>
                        <FontAwesomeIcon icon={faWind} size={30}/>
                        <Text style={styles.detailsText}>{current.wind_mph}</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 100
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        marginBottom: 8
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
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginTop: -100
    },
    details: {
        flex: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 75,
    },
    detailsText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    gradient: {
        // flex: 1,
         width: '100%',
         height: '100%',
         //alignItems: 'center',
         //justifyContent: 'center'
     },
})

export default CurrentWeather; 