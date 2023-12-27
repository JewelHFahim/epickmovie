import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  isLoading: "",
  message: "",
  bulkData: [],
};

const userInfo = JSON.parse(localStorage.getItem("user-info"));

// =================>> SINGLE IMPORT <<===================

export const singleMovieImport = createAsyncThunk(
  "movies/singleMovieImport",
  async (body, { dispatch }) => {
    dispatch(setLoadingST(true));
    try {
      const response = await fetch( "https://fapi.epickmovies.online/api/admin/movie-import",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
            "Authorization": `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify(body),
        }
      );

      // Check if the response was successful
      if (!response.ok) {
        toast.error(setMessage());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Extract the data from the response
      const data = await response.json();

      console.log("Data after posting data:", data?.message);
      dispatch(setMessage(data?.message));
      toast.success(data?.message);
      dispatch(setLoadingST(false));

      return data; // Return the data instead of the entire response
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// ====================>> BULK IMPORT <<==================
export const bulkMovieImport = createAsyncThunk(
  "movies/bulkMovieImport",
  async (body, { dispatch }) => {
    try {
      const response = await fetch(
        "https://fapi.epickmovies.online/api/admin/movie-bulk-import",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
            "Authorization": `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify(body),
        }
      );

      // Check if the response was successful
      if (!response.ok) {
        toast.error(setMessage());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Extract the data from the response
      const data = await response.json();

      console.log("Data after posting data:", data?.message);
      dispatch(setMessage(data?.message));
      toast.success(data?.message);

      return data; // Return the data instead of the entire response
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },

    setLoadingST: (state, action) => {
      state.isLoading = action.payload;
    },

    setBulkData: (state, action) => {
      state.bulkData = action.payload;
    },
  },
});

export const { setMessage, setLoadingST, setBulkData } = movieSlice.actions;

export default movieSlice.reducer;
