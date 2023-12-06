import { Feather, Entypo } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoginScreen from './api/Auth/LoginScreen';
import Register from './api/Auth/RegisterScreen';
import HomeDrawerNavigator from './components/HomeStack/HomeStack';
import JournalStack from './components/JournalStack/JournalStack';
import Logo from './components/Logo/Logo';
// TODO: Use Calendar Page
// import CalendarPage from './screens/Calendar/Calendar';
import FlowChart from './screens/FlowChart/FlowChart';
import Resources from './screens/Resources/Resources';
// TODO: Use Settings
// import Settings from './screens/Settings/Settings';
import SocialFeed from './screens/SocialFeed/SocialFeed';
import { store, persistor } from './store/store';

const Tab = createBottomTabNavigator();

export type LoginStackParamList = {
  LoginScreen: undefined;
  Register: undefined;
  MainApp: undefined;
};

const Stack = createStackNavigator<LoginStackParamList>();

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

function MainApp() {
  return (
    <Tab.Navigator screenOptions={CustomScreenOptions}>
      <Tab.Screen
        name="HomeDrawerNavigator"
        component={HomeDrawerNavigator}
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
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={SocialFeed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={JournalStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="pen-tool" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedin, setIsLoggedIn] = useState<boolean | null>(null);
  // const [isLoggedin, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        setIsLoggedIn(!!token);
      } catch (error) {
        console.log(`Authentication Failure: ${error}`);
      }
    };
    checkAuthentication();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <NavigationContainer>
            {isLoggedin === null ? (
              <Logo />
            ) : isLoggedin ? (
              <MainApp />
            ) : (
              <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                    title: 'Login',
                    headerTitleStyle: { color: '#1EAED7' },
                    headerTintColor: '#1EAED7',
                  }}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{
                    headerTitleStyle: { color: '#1EAED7' },
                    headerTintColor: '#1EAED7',
                  }}
                />
                <Stack.Screen
                  name="MainApp"
                  component={MainApp}
                  options={{
                    headerTitleStyle: { color: '#1EAED7' },
                    headerTintColor: '#1EAED7',
                    headerShown: false,
                    title: 'MainApp',
                  }}
                />
              </Stack.Navigator>
            )}

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
    backgroundColor: '#1EAED7',
  },
});
