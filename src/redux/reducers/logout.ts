import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types";

const initialState: UserState = {
    userDetails: null,
};


const logoutSlice = createSlice({
    name: "logout",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});

export const { setUserDetails } = logoutSlice.actions;

export default logoutSlice.reducer;
