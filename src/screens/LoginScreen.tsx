import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {setIsLogin, setUserDetails} from '../redux/reducers/logout';
import {useDispatch} from 'react-redux';
import {fetchUserData} from '../api/fetch';
import LoginService from '../services/loginService';
import {GeneralData, StorageData} from '../types';

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const generalData = (await fetchUserData(login, password)) as GeneralData;
    const storageData = (await LoginService(generalData)) as StorageData;

    if (storageData.isLogin) {
      dispatch(setUserDetails(storageData));
      dispatch(setIsLogin(true));
    } else {
      Alert.alert(
        'Не удалось авторизоваться',
        'Проверьте правильность введенных данных',
        [
          {
            text: 'OK',
          },
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
