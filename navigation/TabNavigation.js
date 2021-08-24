import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/screens/Home';
import Login from '../src/screens/Login';

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
       <NavigationContainer>
            <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
       </NavigationContainer>
    )
}

export default TabNavigation;



