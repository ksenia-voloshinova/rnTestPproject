import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StorageData, UserState } from "../../types";

const initialState: UserState = {
    userDetails: {} as unknown as StorageData,
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
