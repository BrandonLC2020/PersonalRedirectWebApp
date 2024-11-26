import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import RedirectScreen from '@screens/RedirectScreen';

export type RootStackParamList = {
  Home: undefined;
  Redirect: { params: Record<string, string> } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Redirect" 
          component={RedirectScreen} 
          options={{ title: 'Redirect Viewer' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
