import React from 'react';
import {LoginScreen} from "../screens/LoginScreen";
import {NewsScreen} from "../screens/NewsScreen";
import {NavigationContainer} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsDetailedScreen } from "../screens/NewsDetailedScreen";

const Stack = createNativeStackNavigator();
function RootNavigator() {

  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AuthScreen" component={LoginScreen}/>
                <Stack.Screen name="NewsScreen" component={NewsScreen} />
                <Stack.Screen name="NewsDetailedScreen" component={NewsDetailedScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
