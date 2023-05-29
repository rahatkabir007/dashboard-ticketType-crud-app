import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postReducer from '../pages/Homepage/Layout/RightContent/PostSlice';

export const store = configureStore({
  reducer: {
    post: postReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
