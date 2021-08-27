import * as React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import PostsMain from 'app/screens/Dashboard/Posts/PostsMain';

const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
};

export default Posts;
