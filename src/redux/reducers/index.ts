import { combineReducers } from "@reduxjs/toolkit";

import logoutReducer from "./logout";
import newsReducer from "./news";

export const rootReducer = combineReducers({
    logout: logoutReducer,
    news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
