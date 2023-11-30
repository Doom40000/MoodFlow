import { createSlice } from "@reduxjs/toolkit";

 interface Question2State{
  answer: boolean
}

 const initialState: Question2State = {
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

export const { yes, no } = question2Slice.actions

export default question2Slice.reducer

export type { Question2State };
