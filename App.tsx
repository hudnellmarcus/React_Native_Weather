import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainStack from './navigation/HomeNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="auto" />
          <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
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
