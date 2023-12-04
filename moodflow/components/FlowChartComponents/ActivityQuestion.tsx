import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import { QuestionProps } from '../../screens/FlowChart/FlowChart';
import { yes, no } from '../../store/question6Slice';
import type { RootState } from '../../store/store';

const ActivityQuestion = ({ formButtonHandler }: QuestionProps) => {
  const count = useSelector((state: RootState) => state.question6.answer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Did you participate in any activities today?</Text>
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

export default ActivityQuestion;
