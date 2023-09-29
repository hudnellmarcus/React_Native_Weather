import * as React from 'react'; 

import { StyleSheet, TextInput, View, Keyboard } from 'react-native';


const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder='Search city' 
                placeholderTextColor={'red'}
                style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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

}
}); 

export default SearchBar; 