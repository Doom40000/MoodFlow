import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch(
        'http://192.168.188.42:3001/checkRegisterData',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Some error occurred');
      }
    } catch (error) {
      console.log(error);
      alert('Check whether you have filled in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        placeholderTextColor="white"
        cursorColor="white"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        placeholderTextColor="white"
        cursorColor="white"
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Username"
        placeholderTextColor="white"
        cursorColor="white"
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.loginButtons} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
