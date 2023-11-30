import React, { useState, useEffect } from 'react';
import { Text, View, Platform} from 'react-native';
import * as Location from 'expo-location';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

const SupportLinks = () => {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissions to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View style={styles.container}>
      <Logo />
      <Text style={{color: 'white'}}>{text}</Text>

    </View>
  );
};

export default SupportLinks;
