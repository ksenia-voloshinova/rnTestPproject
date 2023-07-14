import { storeCustomData } from "./storeCustomData";

const LogoutService = async () => {
    await storeCustomData('', '', '', false, '', '');
    return { login: false };
}
export default LogoutService;
