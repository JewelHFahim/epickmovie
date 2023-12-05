import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fapi.epickmovies.fun/api",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
    },
  }),
  tagTypes: ["bollyflix"],
  endpoints: () => ({}),
});

export default apiSlice;
