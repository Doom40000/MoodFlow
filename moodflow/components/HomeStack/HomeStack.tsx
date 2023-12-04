import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CreatePost from '../../screens/CreatePost/CreatePost';
import Home from '../../screens/Home/Home';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default HomeStack;
