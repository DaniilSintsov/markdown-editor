import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IMarkupState {
  markup: string;
}

const initialState: IMarkupState = {
  markup: '# Hello!'
};

export const markupSlice = createSlice({
  name: 'markup',
  initialState,
  reducers: {
    markupInput: (state, action: PayloadAction<string>) => {
      state.markup = action.payload;
    }
  }
});

export const { markupInput } = markupSlice.actions;
export default markupSlice.reducer;
