import {createSlice} from '@reduxjs/toolkit';
import {NewsState} from '../../types';

const initialState: NewsState = {
  news: [],
  filteredNews: [],
  newsItem: {
    id: '',
    title: '',
    image_url: '',
    image_additional_url: '',
    body: '',
    short_text: '',
    created_at: '',
    category: '',
    icon: '',
    model_name: '',
    table_name: '',
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setFilteredNews: (state, action) => {
      state.filteredNews = action.payload;
    },
    setNewsItem: (state, action) => {
      state.newsItem = action.payload;
    },
  },
});

export const {setNews, setNewsItem, setFilteredNews} = newsSlice.actions;

export default newsSlice.reducer;
