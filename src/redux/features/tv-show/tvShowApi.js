import apiSlice from "../api/apiSlice";

const tvShowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ==========================>> CLIENT ALL TV Shows <<===========================
    tvShowList: builder.query({
      query: () => "/tv-posts",
      providesTags: ["EpicMovies"],
    }),

    // ==========================>> ADMIN ALL TV Shows <<===========================
    adminTvShowList: builder.query({
      query: () => "/admin/get-tvshow-list",
      providesTags: ["EpicMovies"],
    }),

    // ========================>> CLIENT TV SHOW DETAILS <<==========================
    seriesDetails: builder.query({
      query: (tvShowId) => `/tv-post/${tvShowId}`,
      providesTags: ["EpicMovies"],
    }),

    // ========================>> ADMIN TV SHOW DETAILS <<==========================
    adminTvShowDetails: builder.query({
      query: (tvShowId) => `/admin/get-tvshow/${tvShowId}`,
      providesTags: ["EpicMovies"],
    }),

    // ======================>>  PAGINATION WISE MOVIE <<===========================
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
  useAdminTvShowListQuery,
  useAdminTvShowDetailsQuery
} = tvShowApi;
export default tvShowApi;
