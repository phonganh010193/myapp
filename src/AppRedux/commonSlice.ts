import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
export interface CommonState {
  error?: string;
  loading?: boolean;
  message?: string;
}

// Define the initial state using that type
const initialState: CommonState = {
  error: "",
  loading: false,
  message: "",
};

export const counterSlice = createSlice({
  name: "common",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = "";
      state.message = "";
    },
    fetchSuccess: (state) => {
      state.loading = false;
      state.error = "";
      state.message = "";
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.message = "";
    },
    
    // Use the PayloadAction type to declare the contents of `action.payload`
   
   
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
} = counterSlice.actions;

export const selectCommonState = (state: RootState) => state.common;

export default counterSlice.reducer;
