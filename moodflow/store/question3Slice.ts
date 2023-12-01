import { createSlice } from "@reduxjs/toolkit";

 interface Question3State{
  answer: boolean
}

export const initialState: Question3State = {
  answer: false
 };

export const question3Slice = createSlice({
  name: 'question3',
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

export const { yes, no } = question3Slice.actions

export default question3Slice.reducer

export type { Question3State };
