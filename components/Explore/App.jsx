import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './../app/(tab)/home'
import explore from './../app/(tab)/explore';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="Explore" component={explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
