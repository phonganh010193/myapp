import { configureStore } from '@reduxjs/toolkit'
import users from "../User/slice";
import common from "../AppRedux/commonSlice";
export const store = configureStore({
  reducer: {
    users,
    common
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch