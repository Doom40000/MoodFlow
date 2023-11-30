import { combineReducers } from '@reduxjs/toolkit';
import question1reducer, { QuestionState } from './question1Slice';
import question2Reducer, { Question2State } from './question2Slice';
import question4Reducer, { Question4State } from './question4Slice';
import question3Reducer, { Question3State } from './question3Slice';
import question5Reducer, { Question5State } from './question5Slice';

export interface RootState1 {
    question1: QuestionState;
    question2: Question2State;
    question3: Question3State;
    question4: Question4State;
    question5: Question5State;
}

const rootReducer = combineReducers<RootState1>({
  question1: question1reducer,
  question2: question2Reducer,
  question3: question3Reducer,
  question4: question4Reducer,
  question5: question5Reducer,
});

export default rootReducer;
