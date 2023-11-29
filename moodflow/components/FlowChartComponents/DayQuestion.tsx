import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const DayQuestion = () => {
  const onPress = () => {
    console.log('Pressed!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>How are you feeling today?</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Good</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Ok</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Bad</Text>
      </Pressable>
    </View>
  );
};

export default DayQuestion;
