import AsyncStorage from '@react-native-async-storage/async-storage';

export const retrieveCustomData = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const client = await AsyncStorage.getItem('client');
    const uid = await AsyncStorage.getItem('uid');
    const isLogin = await AsyncStorage.getItem('isLogin');
    const username = await AsyncStorage.getItem('username');
    const avatar = await AsyncStorage.getItem('avatar');
    const login = await AsyncStorage.getItem('login');
    const password = await AsyncStorage.getItem('password');

    return {
      accessToken,
      client,
      uid,
      isLogin,
      username,
      avatar,
      login,
      password,
    };
  } catch (e) {
    console.log(e);
  }
};
