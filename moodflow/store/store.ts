import { configureStore } from '@reduxjs/toolkit';
import { question1Slice } from './question1Slice';
import { question2Slice } from './question2Slice';
import { question3Slice } from './question3Slice';
import { question4Slice } from './question4Slice';
import { question5Slice } from './question5Slice';


export const store = configureStore({
  reducer: {
    question1: question1Slice.reducer,
    question2: question2Slice.reducer,
    question3: question3Slice.reducer,
    question4: question4Slice.reducer,
    question5: question5Slice.reducer
  }
})

  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
