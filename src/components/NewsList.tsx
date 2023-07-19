import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {NewsData, NewsDetailedScreenNavigationType, RootState} from '../types';
import {useNavigation} from '@react-navigation/native';
import {News} from './News';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostId} from '../api/fetch';
import {setNewsItem} from '../redux/reducers/news';

export const NewsList: React.FC = () => {
  const navigation = useNavigation<NewsDetailedScreenNavigationType>();
  const dispatch = useDispatch();
  const filteredPosts = useSelector(
    (state: RootState) => state.news.filteredNews,
  );
  const openPostHandler = async (news: NewsData) => {
    const postData = await fetchPostId(news.id);
    dispatch(setNewsItem(postData.data.news));
    navigation.navigate('NewsDetailedScreen', {});
  };

  return (
    <View style={styles.wrapperList}>
      <FlatList
        data={filteredPosts}
        keyExtractor={postItem => postItem.id.toString()}
        contentContainerStyle={{paddingBottom: 80}}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => openPostHandler(item)}>
            <News news={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperList: {
    paddingTop: 10,
  },
});
