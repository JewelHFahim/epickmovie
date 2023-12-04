import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://192.168.0.101:5000",
  }),
  tagTypes: ["bollyflix"],
  endpoints: () => ({}),
});

export default apiSlice;
