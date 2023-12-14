import apiSlice from "../api/apiSlice";

const tvShowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ==========================>> ALL TV Shows <<===========================
    tvShowList: builder.query({
      query: () => "/tv-posts",
      providesTags: ["EpicMovies"],
    }),

    // ========================>>  TV SHOW DETAILS <<=======================
    seriesDetails: builder.query({
      query: (tvShowId) => `/tv-post/${tvShowId}`,
      providesTags: ["EpicMovies"],
    }),

    // ===================>>  PAGINATION WISE MOVIE <<====================
    perPgaeTvShow: builder.query({
      query: (pageNo) => `/tv-posts?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useTvShowListQuery,
  useSeriesDetailsQuery,
  usePerPgaeTvShowQuery,
} = tvShowApi;
export default tvShowApi;
