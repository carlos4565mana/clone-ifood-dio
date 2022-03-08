import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Main from './pages/Main'

const Stack = createStackNavigator();
const screenOptions={
  headerShow: false
}

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Home" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes