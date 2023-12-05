/* eslint-disable react/jsx-boolean-value */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Example LoginScreen
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
      if (responseData && responseData.token) {
        await AsyncStorage.setItem('jwtToken', responseData.token);
        // navigation.navigate('LogoutScreen');
        alert(responseData.token);
      } else {
        throw new Error('Token not received');
      }
    } catch (error) {
      console.log(error);
      alert('Invalid credentials!');
    }
  };

  return (
    <SafeAreaView>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default LoginScreen;
