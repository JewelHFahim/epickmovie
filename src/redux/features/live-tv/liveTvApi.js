import apiSlice from "../api/apiSlice";

const liveTvApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // =========>>  Live Tv Category <<============
    liveTvCategory: builder.query({
      query: () => `/live-tv-category`,
      providesTags: ["EpicMovies"],
    }),

    // ========>>  Single Tv Category <<===========
    singleTvCategory: builder.query({
      query: (id) => `/live-tv-category/${id}`,
      providesTags: ["EpicMovies"],
    }),

    // =============>>  Live Tv <<================
    liveTvChannel: builder.query({
      query: () => `/live-tv`,
      providesTags: ["EpicMovies"],
    }),

    // =========>>  Single Tv Channel <<=========
    singleTvChannel: builder.query({
      query: (id) => `/live-tv/${id}`,
      providesTags: ["EpicMovies"],
    }),
    
  }),
});

export const {
  useLiveTvCategoryQuery,
  useSingleTvCategoryQuery,
  useLiveTvChannelQuery,
  useSingleTvChannelQuery,
} = liveTvApi;
export default liveTvApi;
