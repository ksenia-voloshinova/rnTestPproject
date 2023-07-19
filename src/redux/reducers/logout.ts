import {createSlice} from '@reduxjs/toolkit';
import {StorageData, UserState} from '../../types';

const initialState: UserState = {
  userDetails: {} as unknown as StorageData,
  isLogin: true,
};

const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});
export const {setUserDetails, setIsLogin} = logoutSlice.actions;
export default logoutSlice.reducer;
