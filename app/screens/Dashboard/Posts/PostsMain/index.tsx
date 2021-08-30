import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  LogBox,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import TitleSmall from '../../../../atoms/TitleSmall';
import Post from 'app/screens/Dashboard/Posts/PostsMain/Post';
import { useDispatch, useSelector } from 'react-redux';
import { actions as postsactions } from 'app/store/modules/posts/slice';
import {
  getPostsDataOther,
  getPostsDataToday,
  getPostsDataYesterday,
  selectIsLoading,
  todayDate,
  yesterdayDate,
} from 'app/store/modules/posts/selectors';
import { IPost } from 'app/store/modules/posts/types';
import Svg, { Path } from 'react-native-svg';

LogBox.ignoreAllLogs();
type renderItem = {
  item: IPost;
};
type Props = {
  navigation: {
    navigate: (param: string) => void;
    goBack: () => void;
  };
};
const PostsMain = ({ navigation }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const dataToday = useSelector(getPostsDataToday);
  const dataYesterday = useSelector(getPostsDataYesterday);
  const dataOther = useSelector(getPostsDataOther);
  const isFetching = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(postsactions.fetchDataTrigger());
  }, [dispatch]);
  const renderItem = ({ item }: renderItem) => {
    return <Post data={item} navigation={navigation} />;
  };
  function SvgPlus() {
    return (
      <Svg width="16" height="16" viewBox="0 0 16 16">
        <Path
          d="M15.2 7.2H8.80005V0.799951C8.80005 0.358447 8.4416 0 7.99995 0C7.55845 0 7.2 0.358447 7.2 0.799951V7.2H0.799951C0.358447 7.2 0 7.55845 0 7.99995C0 8.4416 0.358447 8.80005 0.799951 8.80005H7.2V15.2C7.2 15.6416 7.55845 16 7.99995 16C8.4416 16 8.80005 15.6416 8.80005 15.2V8.80005H15.2C15.6416 8.80005 16 8.4416 16 7.99995C16 7.55845 15.6416 7.2 15.2 7.2Z"
          fill="#BC181E"
        />
      </Svg>
    );
  }
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        {isFetching && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#BC181E" />
          </View>
        )}
        <View style={styles.container}>
          <TitleSmall text={'Today'} date={todayDate.toString()} />
          <TouchableOpacity onPress={() => navigation.navigate('PostsCreate')}>
            <View style={styles.addPost}>
              <View style={styles.addPostImage}>
                <SvgPlus />
              </View>
              <Text style={styles.addPostText}>Add task</Text>
            </View>
          </TouchableOpacity>
          <FlatList
            style={styles.flatlist}
            data={dataToday}
            renderItem={renderItem}
          />
          <TitleSmall text={'Yesterday'} date={yesterdayDate.toString()} />
          <FlatList
            style={styles.flatlist}
            data={dataYesterday}
            renderItem={renderItem}
          />
          <TitleSmall text={'Other posts'} />
          <FlatList
            style={styles.flatlist}
            data={dataOther}
            renderItem={renderItem}
          />
        </View>
        <LinearGradient
          colors={['transparent', '#ac2121']}
          style={styles.background}
        />
      </View>
    </ScrollView>
  );
};

export default PostsMain;
