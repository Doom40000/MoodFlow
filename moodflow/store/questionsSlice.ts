import { createSlice } from "@reduxjs/toolkit";

export const stateQuestion1 = { answer: '' };
export const stateQuestion2 = { answer: false };
export const stateQuestion3 = { answer: false };
export const stateQuestion4 = { answer: false };
export const stateQuestion5 = { answer: false };

export const question1Slice = createSlice({
  name: 'question1',
  stateQuestion1,
  good: (state: string, action) => {
    state.answer = 'good';
  }
})
