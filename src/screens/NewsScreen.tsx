import {PostList} from "../components/PostList";
import React, { useEffect } from "react";
import {useNavigation} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { fetchPosts } from "../api/fetch";
import { NewsList } from "../components/NewsList";
import { setNews } from "../redux/reducers/news";
import { RootState } from "../redux/reducers";


export const NewsScreen: React.FC = () => {
    const userData = useSelector((state: RootState) => state.logout.userDetails);
    const dispatch = useDispatch();

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Header userData={userData} />,
            headerBackVisible: false
        });

        const getPosts = async () => {
            const posts = await fetchPosts(userData.accessToken, userData.uid, userData.client);
            dispatch(setNews(posts.data.news));
        };
        getPosts();

    }, [navigation, userData]);

    return <NewsList />;
};
