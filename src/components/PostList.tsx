import React from 'react'
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Post } from './Post'
import {PostData, PostListProps} from "../types";
import {useNavigation} from "@react-navigation/native";

export const PostList: React.FC<PostListProps> = ({data }) => {
    const navigation = useNavigation();

    const openPostHandler = (post: PostData) => {
        // @ts-ignore
        navigation.navigate('PostDetailedScreen', post);
    };

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => openPostHandler(item)}>
                        <Post post={item} />
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
