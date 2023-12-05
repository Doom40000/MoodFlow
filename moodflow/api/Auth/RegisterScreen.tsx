import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Register = ({ navigation }) => {
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
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Register;
