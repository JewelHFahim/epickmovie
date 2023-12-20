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

    // =============>> DELETE MOVIE?SERIES PERMANENTLY  <<=================
    deleteParmanet: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/delete-trash-post/${id}`,
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



  }),
});

export const {
  useTrashListQuery,
  useDeleteMovieSeriesMutation,
  useDeleteParmanetMutation,
  useRestoreMovieSeriesMutation
} = trashApi;
export default trashApi;
