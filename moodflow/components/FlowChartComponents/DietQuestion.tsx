/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import { QuestionProps } from '../../screens/FlowChart/FlowChart';
import { yes, no } from '../../store/question2Slice';
import type { RootState } from '../../store/store';

const DietQuestion = ({ formButtonHandler }: QuestionProps) => {
  // const [answer, setAnswer] = useState('');
  const count = useSelector((state: RootState) => state.question2.answer);
  const dispatch = useDispatch();

  // const onPress = (value: string) => {
  //   setAnswer(value);
  //   formButtonHandler();
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Have you eaten a balanced diet today?
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(yes());
          formButtonHandler();
        }}
      >
        <Text style={styles.text}>Yes</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(no());
          formButtonHandler();
        }}
      >
        <Text style={styles.text}>No</Text>
      </Pressable>
    </View>
  );
};

export default DietQuestion;
