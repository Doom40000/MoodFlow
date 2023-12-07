import React, { useState } from 'react';
import {
  Button,
  View,
  TextInput,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo/Logo';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    try {
      if (!email || !username || !password) {
        throw new Error('All fields are required');
      }

      if (!isEmailValid(email)) {
        throw new Error('Invalid email format');
      }

      const response = await fetch(
        'http://192.168.1.116:3001/checkRegisterData',
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
      navigation.replace('LoginScreen');
    } catch (error) {
      console.log(error);
      Alert.alert('Check your credentials again!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        placeholderTextColor="white"
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Username"
        placeholderTextColor="white"
        onChangeText={setUsername}
      />
      <View style={styles.buttonSpacing}>
        <TouchableOpacity style={styles.loginButtons} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
