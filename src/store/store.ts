import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from './items/item.slice'

export const store = configureStore({
  reducer: {
    item: itemReducer
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

