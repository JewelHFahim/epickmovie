import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fapi.epickmovies.online/api",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
      "Authorization": "Bearer 2|jmfnE005o9dl7RZNdUchCRooOxdiLeHA7SYxBFnv188d14e9"
    },
  }),
  tagTypes: ["EpicMovies"],
  endpoints: () => ({}),
});

export default apiSlice;
