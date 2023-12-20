import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import movieSlice from "./features/movies/movieSlice";
import apiSlice from "./features/api/apiSlice";
import searchSlice from "./features/search/searchSlice";
import userSlice from "./features/users/userSlice";
import tvShowSlice from "./features/tv-show/tvShowSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    tvShow: tvShowSlice,
    search: searchSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, thunk),
});

export default store;