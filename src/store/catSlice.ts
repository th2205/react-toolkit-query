import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  imgUrls: string[];
}

const initialState: CounterState = {
  imgUrls: [],
};

export const counterSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setImgs: (state, action: PayloadAction<string[]>) => {
      state.imgUrls = [...state.imgUrls, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImgs } = counterSlice.actions;

export default counterSlice.reducer;
