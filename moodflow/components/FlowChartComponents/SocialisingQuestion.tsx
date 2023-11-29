/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const SocialisingQuestion = () => {
  const [answer, setAnswer] = useState('');

  const onPress = (value: string) => {
    setAnswer(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Have you spent any time with friends or family today?
      </Text>
      <Pressable style={styles.button} onPress={() => onPress('Yes')}>
        <Text style={styles.text}>Yes</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => onPress('No')}>
        <Text style={styles.text}>No</Text>
      </Pressable>
    </View>
  );
};

export default SocialisingQuestion;
