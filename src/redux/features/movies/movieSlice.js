import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { adminHeader, base_url } from "../../../config/config";

const initialState = {
  isLoading: false,
  message: "",
  status: null,
  bulkData: [],
  movieList: [],
};

// =================>> SINGLE IMPORT <<===================
export const singleMovieImport = createAsyncThunk(
  "movies/singleMovieImport",
  async (body, { dispatch }) => {
    dispatch(setLoadingST(true));
    console.log(body);
    try {
      const response = await fetch(`${base_url}/admin/movie-import`, {
        method: "POST",
        headers: adminHeader,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        toast.error(setMessage());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

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
export const bulkMovieImport = createAsyncThunk(
  "movies/bulkMovieImport",
  async (body, { dispatch }) => {
    dispatch(setLoadingST(true));
    try {
      const response = await fetch(`${base_url}/admin/movie-bulk-import`, {
        method: "POST",
        headers: adminHeader,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        toast.error(setMessage());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      dispatch(setMessage(data?.message));
      toast.success(data?.message);
      dispatch(setLoadingST(false));

      return data;
    } catch (error) {
      console.error(error);
      dispatch(setLoadingST(false));
      throw error;
    }
  }
);

// ====================>>TEST FOR CASHING MOVIE SLICE <<==================
// export const fetchMovieList = createAsyncThunk(
//   "movies/fetchMovieList",
//   async (page) => {
//     const response = await axios.get(`${base_url}/movie-posts?page=${page}`, {
//       headers: adminHeader,
//     });
//     return response.data;
//   }
// );

// ====================>> MOVIE SLICE <<==================
export const movieSlice = createSlice({
  name: "movie",
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
    },

    setBulkData: (state, action) => {
      state.bulkData = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchMovieList.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchMovieList.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.movieList = action.payload;
  //     })
  //     .addCase(fetchMovieList.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     });
  // },
});

export const { setMessage, setLoadingST, setBulkData, setStatus } =
  movieSlice.actions;

export default movieSlice.reducer;
