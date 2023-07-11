import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {State} from "../../types";
import {fetchUserData} from "../../api/fetch";

// Определите начальное состояние
const initialState: State = {
    isAuthorized: false,
    userDetails: null,
};


// Создайте срез (slice)
const logoutSlice = createSlice({
    name: "logout",
    initialState,
    reducers: {
        setAuthorization: (state, action) => {
            state.isAuthorized = true;
            state.userDetails = action.payload;
        },
        setIsAuthorized:(state, action) => {
            state.isAuthorized = action.payload;
        }


    },
});

export const { setAuthorization,setIsAuthorized } = logoutSlice.actions;

export default logoutSlice.reducer;
