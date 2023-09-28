import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            headerShown={false} 
        />
    </Stack.Navigator>
  );
};

export default MainStack;
