import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import store from "../redux/store";
import {api} from "../api/api";
import {setAuthorization} from "../redux/reducers/logout";
import * as Keychain from 'react-native-keychain';



export const LoginScreen: React.FC = () => {
    const navigation = useNavigation();
    // const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = async () => {
        const response = await api.post('/auth/sign_in', {email: username, password });
        const userData = response.data;

        // @ts-ignore
        if(userData.success == false){
            Alert.alert(
                'Неудалось авторизоваться',
                'Проверьте правильность введенных данных',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {setUsername(""), setPassword("")},

                    },
                ],

            );
        }else { // @ts-ignore
            if(userData.user){
              console.log(userData);
                        const isLogout:boolean = true;
                        // @ts-ignore
                store.dispatch(setAuthorization(userData.user));
                        // @ts-ignore
                await Keychain.setGenericPassword(username, password, isLogout );
                        // @ts-ignore
                        navigation.navigate('PostScreen');
                    }
        }

    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Логин"
                value={username}
                onChangeText={setUsername}
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
