/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import { QuestionProps } from '../../screens/FlowChart/FlowChart';
import { good, ok, bad } from '../../store/question1Slice';
import type { RootState } from '../../store/store';

const DayQuestion = ({ formButtonHandler }: QuestionProps) => {
  // const [answer, setAnswer] = useState('');
  const count = useSelector((state: RootState) => state.question1.answer);
  const dispatch = useDispatch();

  // const onPress = (value: string) => {
  //   setAnswer(value);
  //   formButtonHandler();
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>How are you feeling today?</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(good());
          formButtonHandler();
        }}
      >
        <Text style={styles.text}>Good</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(ok());
          formButtonHandler();
        }}
      >
        <Text style={styles.text}>Ok</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(bad());
          formButtonHandler();
        }}
      >
        <Text style={styles.text}>Bad</Text>
      </Pressable>
    </View>
  );
};

export default DayQuestion;
