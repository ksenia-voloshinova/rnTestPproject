import AsyncStorage from "@react-native-async-storage/async-storage";
import { GeneralData } from "../types";
import { retrieveCustomData } from "./retrieveCustomData";


const LoginService = async (generalData: GeneralData) => {
  if(generalData.data.user){
    const accessToken = generalData.headers['access-token'] ?? '';
    const client = generalData.headers['client'] ?? '';
    const uid = generalData.headers['uid'] ?? '';
    const isLogin = true

    const username = generalData.data.user.username ?? '';
    const avatar = generalData.data.user.avatar_cropped_big_url ?? '';

    await storeCustomData(accessToken, client, uid, isLogin, username, avatar);

    return await retrieveCustomData();
  }
  else {
    return { login: false };
  }
}

const storeCustomData = async (accessToken: string, client: string, uid: string, isLogin:boolean, username:string, avatar:string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
  await AsyncStorage.setItem('client', client);
  await AsyncStorage.setItem('uid', uid);
  await AsyncStorage.setItem('isLogin', String(isLogin));
  await AsyncStorage.setItem('username', username);
  await AsyncStorage.setItem('avatar', avatar);
}


export default LoginService;
