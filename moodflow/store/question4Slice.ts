import { createSlice } from "@reduxjs/toolkit";

 interface Question4State{
  answer: boolean
}

 export const initialState: Question4State = {
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

export const { yes, no } = question4Slice.actions

export default question4Slice.reducer

export type { Question4State };
