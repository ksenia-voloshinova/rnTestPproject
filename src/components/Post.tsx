import React from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
} from 'react-native'
import {PostProps} from '../types';

export const Post: React.FC<PostProps> = ({post}) => {
    return (
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{ uri: post.img }}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>
                            {post.text}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
    )
}

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
