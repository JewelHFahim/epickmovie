import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  searchTerm: "",
  filteredTerm: "",
  pageNo: "",
  searchMovieSeries: ""
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

    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },

    getSearchMovieSeries: (state, action) => {
      state.searchMovieSeries = action.payload;

    }
  },
});

export const { collectSearchItem, collectFilteredItem, setPageNo, getSearchMovieSeries } = searchSlice.actions;

export default searchSlice.reducer;
