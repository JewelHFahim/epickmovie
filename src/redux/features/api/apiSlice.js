import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url, user_api_key } from "../../../config/config";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", user_api_key);
      headers.set("content-type", "application/json");
      headers.set("Cache-Control", "public, max-age=86000");
      return headers;
    },
  }),
  tagTypes: ["EpicMovies"],
  endpoints: () => ({}),
});

export default apiSlice;
