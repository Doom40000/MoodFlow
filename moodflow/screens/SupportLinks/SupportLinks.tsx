import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

const SupportLinks = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.quoteContainer}>
        <View style={styles.quoteHeader}>
          <Text style={styles.quoteHeaderText}>
            Here is your quote of the day:
          </Text>
        </View>
        {/* <View style={styles.quote}> */}
        <Text style={styles.quoteText}>
          “It's not about what it is, it's about what it can become.” Dr. Seuss
        </Text>
        {/* </View> */}
      </View>
    </View>
  );
};

export default SupportLinks;
