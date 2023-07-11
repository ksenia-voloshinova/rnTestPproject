import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PostScreen} from "../screens/PostScreen";
import {PostDetailedScreen} from "../screens/PostDetailedScreen";
import {LoginScreen} from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => {


    return (
        <Stack.Navigator>
            <Stack.Screen name="AuthScreen" component={LoginScreen}/>
            <Stack.Screen name="PostScreen" component={PostScreen} />
            <Stack.Screen name="PostDetailedScreen" component={PostDetailedScreen}/>
        </Stack.Navigator>
        );
};

export default HomeStackNavigator;
