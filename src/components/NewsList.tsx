import React from 'react'
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Post } from './Post'
import {
  NewsData,
  NewsDetailedScreenNavigationType,
  NewsListProps,
  NewsScreenNavigationType,
  PostData,
  PostListProps
} from "../types";
import {useNavigation} from "@react-navigation/native";
import { News } from "./News";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { fetchPostId } from "../api/fetch";
import { setNews, setNewsItem } from "../redux/reducers/news";

export const NewsList: React.FC = () => {
  const navigation = useNavigation<NewsDetailedScreenNavigationType>();
  const dispatch = useDispatch();
  const newsData: NewsData[] =  useSelector((state: RootState) => state.news.news);

    const openPostHandler = async (news: NewsData) => {
      const postData = await fetchPostId(news.id);
      dispatch(setNewsItem(postData.data.news));
      navigation.navigate('NewsDetailedScreen', {});
    };

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={newsData}
                keyExtractor={newsItem => newsItem.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => openPostHandler(item)}>
                        <News news={item} />
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
