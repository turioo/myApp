import * as React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import PostsMain from 'app/screens/Dashboard/Posts/PostsMain';
import PostsCreate from 'app/screens/Dashboard/Posts/PostsCreate';
import PostsEdit from 'app/screens/Dashboard/Posts/PostsEdit';
import { EditTypes } from 'app/screens/Dashboard/Posts/types';

const Stack = createStackNavigator<EditTypes>();

const Posts: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="PostsMain">
      <Stack.Screen
        name="PostsMain"
        component={PostsMain}
        options={{
          title: 'PostsMain',
        }}
      />
      <Stack.Screen
        name="PostsCreate"
        component={PostsCreate}
        options={{
          title: 'PostsCreate',
        }}
      />
      <Stack.Screen
        name="PostsEdit"
        component={PostsEdit}
        options={{
          title: 'PostsEdit',
        }}
      />
    </Stack.Navigator>
  );
};

export default Posts;
