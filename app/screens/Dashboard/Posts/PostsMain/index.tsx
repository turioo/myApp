import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import TitleSmall from '../../../../atoms/TitleSmall';
import Post from 'app/screens/Dashboard/Posts/PostsMain/Post';
import { useDispatch, useSelector } from 'react-redux';
import { actions as postsactions } from 'app/store/modules/posts/slice';
import { getPostsData } from 'app/store/modules/posts/selectors';
import { IPost } from 'app/store/modules/posts/types';

type renderItem = {
  item: IPost;
};
const PostsMain: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);
  useEffect(() => {
    dispatch(postsactions.fetchDataTrigger());
  }, [dispatch]);
  const renderItem = ({ item }: renderItem) => {
    return <Post data={item} />;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TitleSmall text={'Today'} date={'27.08.2021'} />
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <LinearGradient
        colors={['transparent', '#ac2121']}
        style={styles.background}
      />
    </View>
  );
};

export default PostsMain;
