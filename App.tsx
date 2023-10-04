import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WeatherProvider } from './context/WeatherContext';

import MainStack from './navigation/HomeNavigator';
import { CityInputProvider } from './context/CityContext';

function App() {

  return (
    <CityInputProvider>
      <WeatherProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar style="auto" />
              <MainStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </WeatherProvider>
    </CityInputProvider>
    
  )
}



/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

export default App; 