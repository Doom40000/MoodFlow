import { createSlice } from "@reduxjs/toolkit";

 interface Question7State{
  answer: string
}

export const initialState: Question7State = {
  answer: ''
 };

export const question7Slice = createSlice({
  name: 'question7',
  initialState,
  reducers: {
    done: (state, action) => {
      state.answer = action.payload
    },
  }
})

export const { done } = question7Slice.actions

export default question7Slice.reducer

export type { Question7State };
