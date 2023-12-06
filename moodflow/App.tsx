import { Feather, Entypo } from '@expo/vector-icons';
import  BottomTabNavigationOptions, { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import JournalStack from './components/JournalStack/JournalStack';
import FlowChart from './screens/FlowChart/FlowChart';
import Home from './screens/Home/Home';
import Resources from './screens/Resources/Resources';
import Settings from './screens/Settings/Settings';
import { store, persistor } from './store/store';
import CalendarPage from './screens/Calendar/Calendar';

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
  tabBarActiveTintColor: '#69ABD1',
  tabBarInactiveTintColor: 'grey',
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                name="FlowChart"
                component={FlowChart}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="flow-tree" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={CalendarPage}
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
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69ABD1',
  },
});
