import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import apiSlice from "./features/api/apiSlice";
import searchSlice from "./features/search/searchSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, thunk),
});

export default store;
