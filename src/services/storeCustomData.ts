import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeCustomData = async (
  accessToken: string,
  client: string,
  uid: string,
  isLogin: boolean,
  username: string,
  avatar: string,
) => {
  await AsyncStorage.setItem('accessToken', accessToken);
  await AsyncStorage.setItem('client', client);
  await AsyncStorage.setItem('uid', uid);
  await AsyncStorage.setItem('isLogin', String(isLogin));
  await AsyncStorage.setItem('username', username);
  await AsyncStorage.setItem('avatar', avatar);
};
