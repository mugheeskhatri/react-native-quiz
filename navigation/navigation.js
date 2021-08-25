import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';
import Login from '../src/screens/Login';
import SignUp from '../src/screens/signup';
import Quiz from '../src/screens/quiz';
import Profile from '../src/screens/Profile';
import Result from '../src/screens/Result';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
function Appnavigation(){

    return(
        <NavigationContainer>
          <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Quiz" component={Quiz} />
        <Stack.Screen options={{headerShown:false}} name="Result" component={Result} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
      </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appnavigation;