import * as React from 'react'; 
import { useState } from 'react';

import { StyleSheet, TextInput, View, Keyboard, FlatList, TouchableOpacity, Text } from 'react-native';
import { useCityInput } from '../context/CityContext';
import { useWeather } from '../context/WeatherContext';
import { SearchBarProps } from 'react-native-screens';
import { getSearchResults } from '../hooks/useSearch'
import { SearchData } from '../models/SearchData';


const SearchBar = () => {
    //const { city, setCity } = useCityInput(); 
    const [ searchItem, setSearchItem ] = useState<string>('');
    const [ searchResults, setSearchResults ] = useState<SearchData[] | null> (null);
    const { city, setCity } = useCityInput(); 
    
    //console.log(searchItem)

    const handleSearch = async (value: string) => {
        try {
            //setCity(searchItem);
            const results = await getSearchResults(value);
            setSearchResults(results);
            //console.log('results', results); 
            console.log( searchResults);
            return 
        
        } catch (error) {
            console.error('Error retrieving search results', error)
        }
    };

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <TextInput
                placeholder='Search city' 
                placeholderTextColor={'red'}
                style={styles.textInput}
                onChangeText={(value)=>handleSearch(value)}
                />
            </View>
                
            <View style={styles.locationView}>
                { 
                    searchResults ?
                  searchResults.map((result, index) => (
                    <TouchableOpacity key={index}
                        style={styles.locations}>
                        <Text>{result.name}, {result.country}, {result.region} </Text>
                    </TouchableOpacity>
                   ))
                :
                   null
                }
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
searchContainer: {
    flex: 1
},
searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    padding: 6,
    opacity: 0.5
    
},
textInput: {
    padding: 10
},
locationView: {
    //backgroundColor: 'light gray',
    position: 'absolute',
    marginTop: 75,
    padding: 12
},
locations: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
}
}); 

export default SearchBar; 