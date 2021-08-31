import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import ProfileEdit from 'app/screens/Dashboard/Profile/ProfileEdit';
import ProfileMain from 'app/screens/Dashboard/Profile/ProfileMain';

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
        name="ProfileMain"
        component={ProfileMain}
        options={{
          title: 'ProfileMain',
        }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{
          title: 'ProfileEdit',
        }}
      />
    </Stack.Navigator>
  );
};

export default Posts;
