import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from 'app/screens/Home';
import Dashboard from 'app/screens/Dashboard';
import { useState } from 'react';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [authoriz, setAuthoriz] = useState<boolean>(false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!authoriz && (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
            }}
          />
        )}
        {authoriz && (
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

export default App;
