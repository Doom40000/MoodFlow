/* eslint-disable react/jsx-boolean-value */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterModal = () => {
    navigation.navigate('Register', { screen: 'Register' });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.116:3001/checkLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials!');
      }

      const responseData = await response.json();
      if (responseData && responseData.token) {
        await AsyncStorage.setItem('jwtToken', responseData.token);
        navigation.navigate('MainApp');
      } else {
        throw new Error('Token not received');
      }
    } catch (error) {
      console.log(error);
      alert('Invalid credentials!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TextInput
        style={styles.inputStyle}
        placeholder="Username"
        placeholderTextColor="white"
        cursorColor="white"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        placeholderTextColor="white"
        cursorColor="white"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <View style={styles.buttonSpacing}>
        <TouchableOpacity style={styles.loginButtons} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonSpacing}>
        <TouchableOpacity
          style={styles.loginButtons}
        >
          <Text style={styles.buttonText}>Forgotten Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonSpacing}>
        <TouchableOpacity
          style={styles.loginButtons}
          onPress={handleRegisterModal}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
