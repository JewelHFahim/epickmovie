import apiSlice from "../api/apiSlice";

const tvShowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ========================>> CLIENT TV SHOW DETAILS <<=======================
    seriesDetails: builder.query({
      query: (tvShowId) => `/tv-post/${tvShowId}`,
      providesTags: ["EpicMovies"],
    }),

    // ======================>> PAGINATION WISE MOVIE <<===========================
    perPgaeTvShow: builder.query({
      query: (pageNo) => `/tv-posts?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useSeriesDetailsQuery,
  usePerPgaeTvShowQuery,
} = tvShowApi;
export default tvShowApi;
