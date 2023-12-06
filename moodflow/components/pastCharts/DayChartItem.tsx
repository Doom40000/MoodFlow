import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Pressable } from 'react-native';
import { store } from '../../store/store';
import styles from './DayChartStyles';

let questionText = '';
let answerText = '';

function getQuestion(question: string, answer: string) {
  if (question === 'question1') {
    questionText = 'Feelings: ';
    answerText = answer;
  } else if (question === 'question2') {
    questionText = 'Food: ';
    answerText = answer;
  } else if (question === 'question3') {
    questionText = 'Exercise: ';
    answerText = answer;
  } else if (question === 'question4') {
    questionText = 'Sleep: ';
    answerText = answer;
  } else if (question === 'question5') {
    questionText = 'Social: ';
    answerText = answer;
  } else if (question === 'question6') {
    questionText = 'Activities: ';
    answerText = answer;
  } else {
    questionText = 'Positive thought: ';
    answerText = answer;
  }
}

let textColor = styles.textWhite;

const getAnswer = (answer: string | boolean): string => {
  if (answer === true) {
    answerText = 'Yes';
    textColor = styles.textGreen;
  } else if (answer === false) {
    answerText = 'No';
    textColor = styles.textRed;
  } else {
    answerText = answer;
    answer === 'ok'
      ? (textColor = styles.textRed)
      : answer === 'bad'
        ? (textColor = styles.textRed)
        : (textColor = styles.textGreen);
  }
  return answerText;
};

const DayChartItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  getQuestion(question, answer);
  getAnswer(answer);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <Text style={styles.question}>{questionText}</Text>
          <Text style={textColor}> {answerText.toString()}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DayChartItem;
