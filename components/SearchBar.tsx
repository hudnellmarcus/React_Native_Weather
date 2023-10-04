import * as React from 'react'; 
import { useState } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { useCityInput } from '../context/CityContext';
//import { useWeather } from '../context/WeatherContext';
//import { SearchBarProps } from 'react-native-screens';
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
            // clear searchResults when input is empty 
            if (value === ('')) {
                setSearchResults([]); 
                return; 
            }
            //setCity(searchItem);
            const results = await getSearchResults(value);
            setSearchResults(results);
            //console.log('results', results); 
            //console.log( searchResults);
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
                    placeholderTextColor={'gray'}
                    style={styles.textInput}
                    onChangeText={(value)=>handleSearch(value)}
                />
            </View>
                
            <View style={styles.locationView}>
                { 
                    searchResults ?
                  searchResults.map((result, index) => (
                    <TouchableOpacity key={index}
                        style={styles.locations}
                        onPress={() => setCity(result.name)}
                    >
                        <Text style={styles.resultText}>{result.name}, {result.country} </Text>
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
    width: '100%',
    marginTop: 50,
    padding: 12,
},
locations: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    opacity: 0.9,
    backgroundColor:'rgba(211, 211, 211, 0.7)'
},
resultText: {
    color: 'white',
    fontSize: 16
}
}); 

export default SearchBar; 