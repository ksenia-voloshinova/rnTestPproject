import React from 'react'
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Post } from './Post'
import { NewsData, NewsListProps, PostData, PostListProps } from "../types";
import {useNavigation} from "@react-navigation/native";
import { News } from "./News";
import { useSelector } from "react-redux";

export const NewsList: React.FC = () => {
    const navigation = useNavigation();

    const newsData = useSelector(state => state.news.news);

    const openPostHandler = (news: NewsData) => {
        // @ts-ignore
        navigation.navigate('NewsDetailedScreen', news);
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
