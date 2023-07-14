import { createSlice } from "@reduxjs/toolkit";
import { NewsData } from "../../types";

const initialState = {
    news: null as unknown as NewsData[],
    newsItem: null as unknown as NewsData
};


const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload;
        },
        setNewsItem: (state, action) => {
            state.newsItem = action.payload;
        },
    },
});

export const { setNews,setNewsItem } = newsSlice.actions;

export default newsSlice.reducer;
