import { createSlice } from "@reduxjs/toolkit";

 interface QuestionState{
  answer: string
}

export const initialState: QuestionState = {
  answer: ''
 };

export const question1Slice = createSlice({
  name: 'question1',
  initialState,
  reducers: {
    good: (state) => {
      state.answer = 'good';
    },
    ok: (state) => {
      state.answer = 'ok'
    },
    bad: (state) => {
      state.answer = 'bad'
    },
  }
})

export const { good, ok, bad } = question1Slice.actions

export default question1Slice.reducer
export type { QuestionState };
