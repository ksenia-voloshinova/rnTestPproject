import { combineReducers } from "@reduxjs/toolkit";

import logoutReducer from "./logout";

export const rootReducer = combineReducers({
    logout: logoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
