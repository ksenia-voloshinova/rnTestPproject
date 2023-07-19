import {configureStore} from '@reduxjs/toolkit';
import logoutReducer from './reducers/logout';
import newsReducer from './reducers/news';

export const store = configureStore({
  reducer: {
    logout: logoutReducer,
    news: newsReducer,
  },
});
export default store;
