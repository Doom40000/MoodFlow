/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const DietQuestion = ({ formButtonHandler }: any) => {
  const [answer, setAnswer] = useState('');

  const onPress = (value: string) => {
    setAnswer(value);
    formButtonHandler();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Have you eaten a balanced diet today?
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

export default DietQuestion;
