import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export const { abc } = movieSlice.actions;

export default movieSlice.reducer;
