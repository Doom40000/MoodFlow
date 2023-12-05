/* eslint-disable react/jsx-boolean-value */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.188.42:3001/checkLogin', {
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
      await AsyncStorage.setItem('jwtToken', responseData.token);
      navigation.navigate('LogoutScreen');
    } catch (error) {
      console.log(error);
      alert('Invalid credentials!');
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
