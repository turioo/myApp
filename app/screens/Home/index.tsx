import * as React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Auth from 'app/screens/Home/Auth';
import SignIn from 'app/screens/Home/SignIn';
import SignUp from 'app/screens/Home/SignUp';

const Stack = createStackNavigator();

const Home: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          title: 'Authorization',
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'SignIn',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp',
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
