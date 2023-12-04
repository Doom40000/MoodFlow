import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CreatePost from '../../screens/CreatePost/CreatePost';
import Home from '../../screens/Home/Home';

export type RootStackParamList = {
  Home: undefined;
  'Create Post': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create Post" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default HomeStack;
