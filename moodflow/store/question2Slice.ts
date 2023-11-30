import { createSlice } from "@reduxjs/toolkit";

interface QuestionState{
  answer: boolean
}

export const initialState: QuestionState = {
  answer: false
 };

export const question2Slice = createSlice({
  name: 'question2',
  initialState,
  reducers: {
    yes: (state) => {
      state.answer = true
    },
    no: (state) => {
      state.answer = false
    },

  }
})
