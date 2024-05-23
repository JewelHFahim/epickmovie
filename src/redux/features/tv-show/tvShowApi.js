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

    // ======================>> THEME 2 TV LIST <<===========================
    perPgaeTvShowTheme2: builder.query({
      query: (pageNo) => `/tv-posts/60?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),

    // ======================>> THEME-3 TV-LIST <<===========================
    tvShowTheme3: builder.query({
      query: ({quantity, page}) => `/tv-posts/${quantity}?page=${page}`,
      providesTags: ["EpicMovies"],
    }),


  }),
});

export const {
  useSeriesDetailsQuery,
  usePerPgaeTvShowQuery,
  usePerPgaeTvShowTheme2Query,
  useTvShowTheme3Query
} = tvShowApi;
export default tvShowApi;
