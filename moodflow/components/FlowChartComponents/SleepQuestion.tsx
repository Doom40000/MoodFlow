/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { yes, no } from '../../store/question4Slice'

import styles from './styles';
import { QuestionProps } from '../../screens/FlowChart/FlowChart';

const SleepQuestion = ({ formButtonHandler }: QuestionProps) => {
  // const [answer, setAnswer] = useState('');
  const count = useSelector((state: RootState) => state.question2.answer)
  const dispatch = useDispatch()

  // const onPress = (value: string) => {
  //   setAnswer(value);
  //   formButtonHandler();
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Did you get a good night's sleep?</Text>
      <Pressable style={styles.button} onPress={() => dispatch(yes())}>
        <Text style={styles.text}>Yes</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => dispatch(no())}>
        <Text style={styles.text}>No</Text>
      </Pressable>
    </View>
  );
};

export default SleepQuestion;