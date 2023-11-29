import React, { useState } from 'react';
import { View, Text, Pressable, Touchable } from 'react-native';

import styles from './styles';

const DayQuestion = () => {
  const [answer, setAnswer] = useState('');

  const onPress = (value: string) => {
    setAnswer(value);
    console.log(answer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>How are you feeling today?</Text>
      <Pressable style={styles.button} onPress={() => onPress('Good')}>
        <Text style={styles.text}>Good</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => onPress('Ok')}>
        <Text style={styles.text}>Ok</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => onPress('Bad')}>
        <Text style={styles.text}>Bad</Text>
      </Pressable>
    </View>
  );
};

export default DayQuestion;
