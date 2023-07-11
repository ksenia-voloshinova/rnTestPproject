import {api} from './api';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('logout/logoutSlice', async (username, password) => {
    const response = await api.post('/auth/sign_in', {email: username, password });
    return response.data;
});
