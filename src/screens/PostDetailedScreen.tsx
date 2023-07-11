import {PostList} from "../components/PostList";
import { DATA } from '../data'
import {RouteProp, useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {PostData, PostProps} from "../types";
import React from "react";
import {Post} from "../components/Post";
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { useRoute } from '@react-navigation/native';


export const PostDetailedScreen: React.FC = () => {
    const route = useRoute();
    const post  = route.params as PostData;

    return (
        <View >
            {<Text>{post.text ?? ''}</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: '#fff',
        fontFamily: 'open-regular'
    }
})