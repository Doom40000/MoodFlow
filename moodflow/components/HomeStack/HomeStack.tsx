import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CreatePost from '../../screens/CreatePost/CreatePost';
import Home from '../../screens/Home/Home';

export type RootStackParamList = {
  Home: undefined;
  CreatePost: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: 'Create Post',
          headerTitleStyle: { color: '#1EAED7' },
          headerTintColor: '#1EAED7',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
