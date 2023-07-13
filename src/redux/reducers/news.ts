import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsState } from "../../types";

const initialState: NewsState = {
    news: null,
};


const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload;
        },
    },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
