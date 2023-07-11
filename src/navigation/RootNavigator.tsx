import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {PostScreen} from "../screens/PostScreen";
import {PostDetailedScreen} from "../screens/PostDetailedScreen";
import {LoginScreen} from "../screens/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import * as Keychain from 'react-native-keychain';
import store from "../redux/store";
import {setAuthorization, setIsAuthorized} from "../redux/reducers/logout";
import {useSelector} from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

function RootNavigator() {
    // @ts-ignore
    const isAuthorized = useSelector(state => state.logout.isAuthorized);
    console.log(isAuthorized)
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                store.dispatch(setIsAuthorized(true))
            } else {
                store.dispatch(setIsAuthorized(false))

            }
        } catch (error) {
            console.log('Не удалось получить информацию о входе из Keychain', error);
            store.dispatch(setIsAuthorized(false))
        }
    };

  return (
    <NavigationContainer>
            <Stack.Navigator>


                <Stack.Screen name="AuthScreen" component={LoginScreen}/>
                <Stack.Screen name="PostScreen" component={PostScreen} />
                <Stack.Screen name="PostDetailedScreen" component={PostDetailedScreen}/>

                {/*{isAuthorized ? (*/}
                {/*    <>*/}
                {/*        <Stack.Screen name="PostScreen" component={PostScreen} />*/}
                {/*        <Stack.Screen name="PostDetailedScreen" component={PostDetailedScreen}/>*/}
                {/*    </>*/}
                {/*) : (*/}
                {/*    <Stack.Screen name="AuthScreen" component={LoginScreen}/>*/}
                {/*)}*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
