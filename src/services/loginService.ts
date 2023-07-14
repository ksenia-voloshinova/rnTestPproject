import { GeneralData } from "../types";
import { retrieveCustomData } from "./retrieveCustomData";
import { storeCustomData } from "./storeCustomData";
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
export default LoginService;
