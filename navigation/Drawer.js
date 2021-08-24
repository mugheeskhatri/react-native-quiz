import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/screens/Home';
import Login from '../src/screens/Login';
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
}

export default DrawerNavigation;
