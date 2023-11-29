import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Home from './screens/Home/Home';
import React from 'react';

import Settings from './screens/Settings/Settings';


const Tab = createBottomTabNavigator();

const CustomScreenOptions = {
  headerShown: false,
  tabBarStyle: {
    width: '75%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabBarActiveTintColor: '#1EAED7',
  tabBarInactiveTintColor: 'grey',
}

export default function App() {
  return (

      <NavigationContainer>
        <Tab.Navigator screenOptions={CustomScreenOptions}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="settings" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
        <StatusBar style="auto" backgroundColor="#ffffff" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
