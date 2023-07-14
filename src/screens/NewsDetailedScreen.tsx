import React, { useEffect } from "react";
import { Image, StyleSheet, Text,  View } from "react-native";
import HTML from 'react-native-render-html';
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import Header from "../components/Header";
import { fetchPosts } from "../api/fetch";
import { setNews } from "../redux/reducers/news";
import { useNavigation } from "@react-navigation/native";

export const NewsDetailedScreen: React.FC = () => {
  const navigation = useNavigation();
  const userData = useSelector((state: RootState) => state.logout.userDetails);
  const news = useSelector((state: RootState) => state.news.newsItem);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header userData={userData} />,
      headerBackVisible: false

    });

  }, [navigation, userData]);

  return (
      <View style={styles.container}>
          <Text style={styles.title}>{news.title}</Text>
          <Image
            style={styles.image}
            source={{ uri: news.image_url }}
          />
          <HTML source={{ html: news.short_text ?? '' }} contentWidth={1} />
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
