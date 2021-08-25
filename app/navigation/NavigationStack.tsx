import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import withError from '../hoc/withError';
import { $apiClient } from 'app/utils/apiClient';

import Home from 'app/screens/Home';
import Dashboard from 'app/screens/Dashboard';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'app/store/modules/app/selectors';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const IsAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!IsAuthenticated && (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
            }}
          />
        )}
        {IsAuthenticated && (
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Dashboard',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withError(App, $apiClient);
