import React, { useEffect, useState } from "react";
import {useNavigation} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { fetchPosts } from "../api/fetch";
import { NewsList } from "../components/NewsList";
import { setFilteredNews, setNews } from "../redux/reducers/news";
import { SearchBar } from "../components/SearchBar";
import { RootState } from "../types";
import { StyleSheet, View } from "react-native";


export const NewsScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userData = useSelector((state: RootState) => state.logout.userDetails);
    const posts = useSelector((state: RootState) => state.news.news);
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Header userData={userData}  isFlexUpdated={false}/>,
            headerBackVisible: false
        });

        const getPosts = async () => {
            const posts = await fetchPosts();
            dispatch(setNews(posts.data.news));
            dispatch(setFilteredNews(posts.data.news));

        };
        getPosts();

    }, [navigation, userData]);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = posts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        );
        dispatch(setFilteredNews(filtered));
    };

    return (
      <View style={styles.wrapper}>
          <SearchBar onSearch={handleSearch} />
          <NewsList />
      </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10
    }
})
