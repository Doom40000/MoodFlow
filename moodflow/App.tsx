import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Home from './screens/Home/Home';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      <Home />
      <StatusBar style="auto" backgroundColor="#ffffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#1EAED7',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
