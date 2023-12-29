import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  isLoading: false,
  message: "",
  status: null,
  bulkTvData: [],
};

const userInfo = JSON.parse(localStorage.getItem("user-info"));
// =================>> SINGLE TV SHOW IMPORT <<===================

export const singleTvShowImport = createAsyncThunk( "tvShows/singleTvShowImport", async (body, { dispatch }) => {

     dispatch(setLoadingST(false));

    try {
      dispatch(setLoadingST(true));
      const response = await fetch("https://fapi.epickmovies.online/api/admin/tv-import",
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

      if (!response.ok) {
        toast.error(setMessage());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      dispatch(setMessage(data?.message));
      dispatch(setStatus(data?.status));
      toast.success(data?.message);
      dispatch(setLoadingST(false));

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// ====================>> BULK IMPORT <<==================
export const bulkTvShowImport = createAsyncThunk( "tvShows/bulkTvShowsImport", async (body, { dispatch }) => {

    try {
      const response = await fetch(
        "https://fapi.epickmovies.online/api/admin/tv-bulk-import",
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

      console.log(response)

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

export const tvShowSlice = createSlice({
  name: "tvShow",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setLoadingST: (state, action) => {
      state.isLoading = action.payload;
      console.log(action.payload)
    },

    setBulkData: (state, action) => {
      state.bulkTvData = action.payload;
    },
  },
});

export const { setMessage, setLoadingST, setBulkData, setStatus } = tvShowSlice.actions;

export default tvShowSlice.reducer;
