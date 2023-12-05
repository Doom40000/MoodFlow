/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from 'react';
import { View, Text, Pressable, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import { QuestionProps } from '../../screens/FlowChart/FlowChart';
import { done } from '../../store/question7Slice';
import type { RootState } from '../../store/store';
import { store } from '../../store/store';

const PositivityQuestion = ({ formButtonHandler }: QuestionProps) => {
  const inputValue = useSelector((state: RootState) => state.question7.answer);
  const dispatch = useDispatch();

  const handleChange = (text: string): void => {
    dispatch(done(text));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Describe one positive thing that happened today:
      </Text>
      <TextInput
        multiline={true}
        textAlign={'center'}
        style={styles.inp}
        value={inputValue} onChangeText={handleChange} />
      <Pressable
        style={styles.button}
        onPress={() => {
        formButtonHandler();
        }}
      >
        <Text style={styles.text}>Done</Text>
      </Pressable>
    </View>
  );
};

export default PositivityQuestion;
