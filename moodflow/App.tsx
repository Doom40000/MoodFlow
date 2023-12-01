import 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './screens/Home/Home';
import Journal from './screens/Journal/Journal';
import Settings from './screens/Settings/Settings';
import Resources from './screens/Resources/Resources';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
};

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Resources" component={Resources} />
    </Stack.Navigator>
  );
}

export default function App() {
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
          <Tab.Screen
            name="Resources"
            component={Resources}
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
