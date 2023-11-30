import { createSlice } from "@reduxjs/toolkit";

interface QuestionState{
  answer: boolean
}

export const initialState: QuestionState = {
  answer: false
 };

export const question4Slice = createSlice({
  name: 'question4',
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
