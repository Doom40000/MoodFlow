import { openBrowserAsync } from 'expo-web-browser';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';
import Logo from '../../components/Logo/Logo';

const Resources = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.quoteContainer}>
        <Text style={styles.headerText}>
          Based on your location, we've found some relevant resources that could
          be of use to you:
        </Text>
        <Pressable
          onPress={() =>
            openBrowserAsync(
              'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/',
            )
          }
        >
          <Text style={[styles.underline]}>Eating a balanced diet</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            openBrowserAsync(
              'https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/',
            )
          }
        >
          <Text style={[styles.underline]}>
            Understanding and mitigating sleep problems
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Resources;
