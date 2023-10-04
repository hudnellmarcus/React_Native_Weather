import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';

import { useWeather } from '../context/WeatherContext';
import { useCityInput } from '../context/CityContext';


const HomeScreen = () => {
    const { weatherData  } = useWeather(); 
    const { city, setCity } = useCityInput(); 


    return (
        <LinearGradient
                colors={['rgba(228, 238, 100, 1)',  
                         'rgba(69, 82, 252, 1)', 
                         'rgba(69, 82, 252, 0.5)', 
                        ]}
                style={styles.gradient}
            >
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.searchContainer}>
                        <SearchBar />
                    </View>
                    <View>
                        <CurrentWeather />
                    </View>
                </SafeAreaView>
            </View>
        </LinearGradient>
           
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // borderColor: 'black',
       // borderWidth: 4
    },
    gradient: {
       // flex: 1,
        width: '100%',
        height: '100%',
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    titleContainer: {
        width: '75%',
        marginTop: 50,
        marginLeft: 50,
        alignItems: 'center',
        justifyContent: 'center',
      //  borderColor: 'black',
      //  borderWidth: 4
    },
    title: {
        fontSize: 36,
        color: 'white'
    },
    searchContainer: {
        height: '7%',
        width: 350,
        position: 'relative',
        zIndex: 50,
      //  borderColor: 'black',
      //  borderWidth: 4,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 10
    },

})

export default HomeScreen; 