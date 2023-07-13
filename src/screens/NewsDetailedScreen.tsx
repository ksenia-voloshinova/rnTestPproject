import {PostList} from "../components/PostList";
import { DATA } from '../data'
import {RouteProp, useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NewsData, NewsProps, PostData, PostProps } from "../types";
import React, { useEffect } from "react";
import {Post} from "../components/Post";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import Header from "../components/Header";
import { fetchPosts } from "../api/fetch";
import { setNews } from "../redux/reducers/news";
import HTML from 'react-native-render-html';

export const NewsDetailedScreen: React.FC = () => {

    const route = useRoute();
    const news  = route.params as NewsData;
    const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerTitle: () => <Header userData={userData} />,
    //     });
    //
    // }, [navigation]);
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{news.title}</Text>
          <Image
            style={styles.image}
            source={{ uri: news.image_url }}
          />
          <HTML source={{ html: news.body ?? '' }} contentWidth={1} />
          <HTML source={{ html: news.body ?? '' }} contentWidth={1} />
      </View>
    );
};

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    title: {
        fontFamily: 'open-regular',
        color: "#000",
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    container:{
        flex: 1,
        padding: 10,

    },
    content:{
        fontSize:14,
        marginBottom: 5,
    }

})
