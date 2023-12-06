import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LogoutConfirmation from '../../api/Auth/Logout';
import CreatePost from '../../screens/CreatePost/CreatePost';
import Home from '../../screens/Home/Home';
import Settings from '../../screens/Settings/Settings';
import Resources from '../../screens/Resources/Resources';

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

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="Profile" component={Settings} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={LogoutConfirmation} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;
