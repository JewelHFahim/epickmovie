import apiSlice from "../api/apiSlice";

const trashApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ###############>> SERIES and MOVIES <<############

    // =======>> MOVIE / SERIES TRASH LIST <<=========
    trashList: builder.query({
      query: () => "/admin/get-all-trash-post",
      providesTags: ["EpicMovies"],
    }),

    // ========>> DELETE MOVIE / SERIES  <<===========
    deleteMovieSeries: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/trash-post/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ==>>SINGLE MOVIE/SERIES DELETE PERMANENT <<====
    deleteParmanet: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/delete-trash-post/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===>>DELETE ALL MOVIE/SERIES PERMANENTLY<<====
    deleteAllMovieSeriesParmanet: builder.mutation({
      query: () => ({
        method: "DELETE",
        url: `/admin/clear-all-trash-post`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // =========>> RESTORE MOVIE/SERIES <<==========
    restoreMovieSeries: builder.mutation({
      query: (id) => ({
        method: "GET",
        url: `/admin/restore-trash-post/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ###############>> SEASONS <<############

    // ===========>> SEASON TRASH LIST <<=============
    seasonTrashList: builder.query({
      query: () => "/admin/get-all-trash-season",
      providesTags: ["EpicMovies"],
    }),

    // =====>>SINGLE SEASON DELETE PERMANENTLY<<======
    deleteSeasonParmanent: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/delete-trash-season/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ====>> ALL SEASON DELETE PERMANENTLYn <<=======
    deleteAllSeasonParmanet: builder.mutation({
      query: () => ({
        method: "DELETE",
        url: `/admin/clear-all-trash-season`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ============>> RESTORE SEASON   <<=============
    restoreSeason: builder.mutation({
      query: (id) => ({
        method: "GET",
        url: `/admin/restore-trash-season/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // =============>> DELETE SEASON  <<==============
    deleteSeason: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/trash-season/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ###############>> EPISODES <<############

    // ===========>> EPISODE TRASH LIST <<===========
    episodeTrashList: builder.query({
      query: () => "/admin/get-all-trash-episode",
      providesTags: ["EpicMovies"],
    }),

    // =============>> RESTORE EPISODE <<============
    restoreEpisode: builder.mutation({
      query: (id) => ({
        method: "GET",
        url: `/admin/restore-trash-episode/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===========>> DELETE EPISODE  <<=============
    deleteEpisode: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/trash-episode/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===>>SINGLE EPISODE DELETE PARMANENTLY<<====
    deleteEpisodeParmanet: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/delete-trash-episode/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ====>> DELETE ALL EPISODE PARMANENTLY <<====
    deleteAllEpisodeParmanet: builder.mutation({
      query: () => ({
        method: "DELETE",
        url: `/admin/clear-all-trash-episode`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),
    
  }),
});

export const {
  useTrashListQuery,
  useDeleteMovieSeriesMutation,
  useDeleteParmanetMutation,
  useRestoreMovieSeriesMutation,
  useDeleteAllMovieSeriesParmanetMutation,
  useDeleteEpisodeMutation,
  useSeasonTrashListQuery,
  useRestoreSeasonMutation,
  useDeleteSeasonParmanentMutation,
  useEpisodeTrashListQuery,
  useRestoreEpisodeMutation,
  useDeleteEpisodeParmanetMutation,
  useDeleteSeasonMutation,
  useDeleteAllSeasonParmanetMutation,
  useDeleteAllEpisodeParmanetMutation,
} = trashApi;
export default trashApi;
