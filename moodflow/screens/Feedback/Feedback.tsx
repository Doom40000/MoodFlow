/* eslint-disable no-unused-expressions */
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { createNodes } from '../../api/Feedback/feedback_api';
import { store } from '../../store/store';
import type { RootState } from '../../store/store';

// TODO Import redux answers object

const makeFeedback = (state: RootState) => {
  if (
    (state.question1.answer === 'good' || state.question1.answer === 'ok') &&
    state.question2.answer &&
    state.question3.answer &&
    state.question4.answer &&
    state.question5.answer
  ) {
    return 'Congratulations on doing great today. Keep up the good work.';
  } else {
    const answersObject = {
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
    };
    //Iterate over the object and extract all negative answers. Create a prompt from this and return it.
    // If all answers are positive but the first question returns 'bad' then add additional prompt.
    state.question1.answer === 'good'
      ? (answersObject.answer1 =
          "That's great to hear that you're having a good day, keep it up \n \n!")
      : state.question1.answer === 'ok'
        ? (answersObject.answer1 =
            "It's good to hear that your day is ok, we hope it keeps getting better. \n \n")
        : (answersObject.answer1 =
            "We're sorry to hear that you're not having a good day. We hope we can help suggest some positive changes for your day. \n \n");

    state.question2.answer === true
      ? (answersObject.answer2 = 'Good job on eating well today! \n \n')
      : (answersObject.answer2 =
          "It seems like you're struggling to eat well today. If you can, try to eat something it might boost your mood and energy. \n \n");

    state.question3.answer === true
      ? (answersObject.answer3 =
          'Great work on getting some exercise today. Keeping yourself moving is a fantastic way to boost your happiness. \n \n')
      : (answersObject.answer3 =
          'Exercising is hard but getting even 5 minutes of movement or time outside can make a real difference in your day. \n \n');

    state.question4.answer === true
      ? (answersObject.answer4 =
          "We're happy that you got a good night's sleep. \n \n")
      : (answersObject.answer4 =
          "Sorry to hear that you didn't sleep well. Try to avoid screens and make time for yourself to relax and recover before bed. \n \n");

    state.question5.answer === true
      ? (answersObject.answer5 =
          "It's great to hear that you've spent time around others today. Seeing friends and family can improve your day a lot. \n \n")
      : (answersObject.answer5 =
          'When we feel bad, seeing people can be difficult but even just calling someone to chat will make a big difference to your mood. \n \n');
    return answersObject;
  }
};

const Feedback = () => {
  const state = store.getState();
  const answers = makeFeedback(state);
  let feedBackText = '';
  if (
    answers === 'Congratulations on doing great today. Keep up the good work.'
  ) {
    feedBackText = answers;
  } else {
    feedBackText = `${answers.answer1} ${answers.answer2} ${answers.answer3} ${answers.answer4} ${answers.answer5} `;
  }
  // If answers are all postive, provide congratulations about positive habits.
  // If any answers are negative, provide prompts to alter behaviours.

  // For day question, we can have a string that says: if good: 'It seems that you're having a good day, that's great!'

  // -> Call to backend START
  const dateToday = new Date();
  const questions = [
    {
      question: 'question1',
      answer: state.question1.answer as string | boolean,
      date: dateToday,
      relationship: 'HAS_ANSWERED',
    },
    {
      question: 'question2',
      answer: state.question2.answer as string | boolean,
      date: dateToday,
      relationship: 'HAS_ANSWERED',
    },
    {
      question: 'question3',
      answer: state.question3.answer as string | boolean,
      date: dateToday,
      relationship: 'HAS_ANSWERED',
    },
    {
      question: 'question4',
      answer: state.question4.answer as string | boolean,
      date: dateToday,
      relationship: 'HAS_ANSWERED',
    },
    {
      question: 'question5',
      answer: state.question5.answer as string | boolean,
      date: dateToday,
      relationship: 'HAS_ANSWERED',
    },
  ];

  createNodes(questions);
  // -> Call to backend END

  return (
    <View style={styles.container}>
      <Text style={styles.feedbackText}>{feedBackText}</Text>
    </View>
  );
};

export default Feedback;
