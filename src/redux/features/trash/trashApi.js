import apiSlice from "../api/apiSlice";

const trashApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ===========>>  TRASH LIST <<=============
    trashList: builder.query({
      query: () => "/admin/get-all-trash-post",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> DELETE MOVIE  <<=============================
    deleteMovieSeries: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/trash-post/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===========>> DELETE SINGLE MOVIE/SERIES PERMANENTLY  <<============
    deleteParmanet: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/delete-trash-post/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===========>> DELETE ALL MOVIE/SERIES PERMANENTLY  <<================
    deleteAllParmanet: builder.mutation({
      query: (allIds) => ({
        method: "DELETE",
        url: `/admin/clear-all-trash-post/${allIds}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===================>> RESTORE MOVIE/SERIES   <<======================
    restoreMovieSeries: builder.mutation({
      query: (id) => ({
        method: "GET",
        url: `/admin/restore-trash-post/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===========>> DELETE SEASON  <<============
    deleteSeason: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/trash-season/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===========>> DELETE EPISODE  <<============
    deleteEpisode: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/trash-episode/${id}`,
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
  useDeleteAllParmanetMutation,
  useDeleteSeasonMutation,
  useDeleteEpisodeMutation
} = trashApi;
export default trashApi;
