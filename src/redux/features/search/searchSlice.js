import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  searchTerm: "",
  filteredTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {

    collectSearchItem: (state, action) => {
      state.searchTerm = action.payload;
    },

    collectFilteredItem: (state, action) => {
      state.filteredTerm = action.payload;
    },

  },
});

export const { collectSearchItem, collectFilteredItem } = searchSlice.actions;

export default searchSlice.reducer;
