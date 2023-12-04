import { createSlice } from "@reduxjs/toolkit";

 interface Question6State{
  answer: boolean
}

export const initialState: Question6State = {
  answer: false
 };

export const question6Slice = createSlice({
  name: 'question6',
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

export const { yes, no } = question6Slice.actions

export default question6Slice.reducer

export type { Question6State };
