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

    // ===============================>> ADD SEASON <<==============================
    addSeason: builder.mutation({
      query: ({ data, id }) => ({
        method: "POST",
        url: `/admin/add-season/${id}`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),


    // ===============================>> ADD EPISODE <<==============================
    addEpisode: builder.mutation({
      query: ({ data, id }) => ({
        method: "POST",
        url: `/admin/add-episode/${id}`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===============================>> EPISODE LIST <<==============================
    episodeList: builder.query({
      query: (id) => `/admin/get-episode/${id}`,
      providesTags: ["EpicMovies"],
    }),


  }),
});

export const {
  useTvShowListQuery,
  useSeriesDetailsQuery,
  usePerPgaeTvShowQuery,
  useAdminTvShowListQuery,
  useAdminTvShowDetailsQuery,
  useAddSeasonMutation,
  useEpisodeListQuery,
  useAddEpisodeMutation
} = tvShowApi;
export default tvShowApi;
