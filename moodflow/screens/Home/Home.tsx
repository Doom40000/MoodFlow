import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

const Home = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default Home;
