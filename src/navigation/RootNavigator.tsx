import React, {useEffect} from 'react';
import {LoginScreen} from '../screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveCustomData} from '../services/retrieveCustomData';
import {RootState, StorageData} from '../types';
import {setIsLogin, setUserDetails} from '../redux/reducers/logout';
import {NewsScreen} from '../screens/NewsScreen';
import {NewsDetailedScreen} from '../screens/NewsDetailedScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const isLogin = useSelector((state: RootState) => state.logout.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const storageData = (await retrieveCustomData()) as StorageData;
      dispatch(setUserDetails(storageData));

      if (storageData.isLogin === 'true') {
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    };

    checkAuth();
  }, [isLogin]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen name="NewsScreen" component={NewsScreen} />
            <Stack.Screen
              name="NewsDetailedScreen"
              component={NewsDetailedScreen}
            />
          </>
        ) : (
          <Stack.Screen name="AuthScreen" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
