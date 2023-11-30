import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

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
          {quote}
        </Text>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Home;
