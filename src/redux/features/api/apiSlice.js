import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const getUserName = localStorage.getItem("user-info");
const token = JSON.parse(getUserName)?.token;
console.log(token)

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fapi.epickmovies.online/api",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
      "Authorization": `Bearer ${token}`
    },
  }),
  tagTypes: ["EpicMovies"],
  endpoints: () => ({}),
});

export default apiSlice;
