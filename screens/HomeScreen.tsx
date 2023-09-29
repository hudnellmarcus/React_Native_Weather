import * as React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(228, 238, 100, 1)', 
                         'rgba(29, 216, 253, 1)', 
                         'rgba(69, 82, 252, 1)', 
                        ]}
                style={styles.gradient}
            >
                <Text>HomeScreen</Text>
            </LinearGradient>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    gradient: {
       flex: 1,
        width: '100%',
        height: '100%',
        //alignItems: 'center',
        //justifyContent: 'center'
    }
})

export default HomeScreen; 