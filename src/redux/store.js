import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import movieSlice from "./features/movies/movieSlice";
import apiSlice from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    movie: movieSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, thunk),
});

export default store;
