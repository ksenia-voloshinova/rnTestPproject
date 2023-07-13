import {PostList} from "../components/PostList";
import { DATA } from '../data'
import React, { useEffect } from "react";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import Header from "../components/Header";
import { fetchPosts } from "../api/fetch";



export const PostScreen: React.FC = () => {
    const userData = useSelector(state => state.logout.userDetails);

    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Header userData={userData} />,
            headerBackVisible: false
        });

        const getPosts = async () => {
            const posts = await fetchPosts(userData.accessToken, userData.uid, userData.client) ;
            console.log("posts",posts.data);
        };
        getPosts();

    }, [navigation, userData]);

    return <PostList/>;
};
