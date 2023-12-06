import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LogoutConfirmation = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('jwtToken');
      navigation.replace('LoginScreen');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Are you sure you want to log out?</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity
          style={{ marginRight: 20, padding: 10, backgroundColor: 'red' }}
          onPress={handleLogout}
        >
          <Text style={{ color: 'white' }}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: 'green' }}
          onPress={handleCancel}
        >
          <Text style={{ color: 'white' }}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogoutConfirmation;
