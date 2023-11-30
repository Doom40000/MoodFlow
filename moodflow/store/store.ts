import { configureStore } from '@reduxjs/toolkit';
import { question1Slice } from './questionsSlice';

export const store = configureStore({
  reducer: {
    question1: question1Slice.reducer,
  }
})

  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
