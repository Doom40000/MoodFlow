import { createSlice } from "@reduxjs/toolkit";

 interface Question5State{
  answer: boolean
}

export const initialState: Question5State = {
  answer: false
 };

export const question5Slice = createSlice({
  name: 'question5',
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

export const { yes, no } = question5Slice.actions

export default question5Slice.reducer

export type { Question5State };
