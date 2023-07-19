import {storeCustomData} from './storeCustomData';
import {setIsLogin, setUserDetails} from '../redux/reducers/logout';
import {useDispatch} from 'react-redux';

const dispatch = useDispatch();
const LogoutService = async () => {
  await storeCustomData('', '', '', false, '', '');
  dispatch(setIsLogin(false));
  dispatch(setUserDetails({}));
};
export default LogoutService;
