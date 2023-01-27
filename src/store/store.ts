import { configureStore } from '@reduxjs/toolkit';
import markupReducer from './markup/markup.slice';

export const store = configureStore({
  reducer: {
    markup: markupReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
