import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import Home from './screens/Home/Home';
import Journal from './screens/Journal/Journal';
import Settings from './screens/Settings/Settings';
import SupportLinks from './screens/SupportLinks/SupportLinks';

const Tab = createBottomTabNavigator();

const CustomScreenOptions: BottomTabNavigationOptions = {
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
};

export default function App() {
  const [location, setLocaton] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <View style={styles.container}>
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
            name="SupportLinks"
            component={SupportLinks}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="external-link" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Journal"
            component={Journal}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="pen-tool" size={size} color={color} />
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1EAED7',
  },
});
