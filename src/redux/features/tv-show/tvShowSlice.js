import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { adminHeader, base_url } from "../../../config/config";

const initialState = {
  isLoadingTv: false,
  message: "",
  status: null,
  bulkTvData: [],
};

// =================>> SINGLE TV SHOW IMPORT <<===================
export const singleTvShowImport = createAsyncThunk(
  "tvShows/singleTvShowImport",
  async (body, { dispatch }) => {
    dispatch(setLoadingST(true));
    try {
      const response = await fetch(
        `${base_url}/admin/tv-import`,
        {
          method: "POST",
          headers: adminHeader,
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
      dispatch(setLoadingST(false));
      console.error(error);
      throw error;
    }
  }
);

// =======================>> BULK IMPORT <<=======================
export const bulkTvShowImport = createAsyncThunk("tvShows/bulkTvShowsImport", async (body, { dispatch }) => {

    try {
      dispatch(setLoadingST(true));
      const response = await fetch( `${base_url}/admin/tv-bulk-import`, {
          method: "POST",
          headers: adminHeader,
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


      return data; 
    } catch (error) {
      dispatch(setLoadingST(false));
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
      state.isLoadingTv = action.payload;
    },

    setBulkData: (state, action) => {
      state.bulkTvData = action.payload;
    },
  },
});

export const { setMessage, setLoadingST, setBulkData, setStatus } =
  tvShowSlice.actions;

export default tvShowSlice.reducer;
