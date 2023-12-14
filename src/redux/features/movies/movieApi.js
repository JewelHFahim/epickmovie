import apiSlice from "../api/apiSlice";

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ==========================>> ALL MOVIES <<===========================
    movieList: builder.query({
      query: () => "/movie-posts",
      providesTags: ["EpicMovies"],
    }),

    // ========================>>  SINGLE/MOVIE DETAILS <<=======================
    movieDetails: builder.query({
      query: (movieId) => `/movie-post/${movieId}`,
      providesTags: ["EpicMovies"],
    }),

    // ===================>>  PAGINATION WISE MOVIE <<====================
    perPgaeMovie: builder.query({
      query: (pageNo) => `/movie-posts?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),

    // ==========================>> GENRE <<===========================
    genreList: builder.query({
      query: () => "/terms/genres-list",
      providesTags: ["EpicMovies"],
    }),

    // ==========================>> YEAR <<============================
    yearList: builder.query({
      query: () => "/terms/year-list",
      providesTags: ["EpicMovies"],
    }),

    // ========================>> QUALITY <<=============================
    qualityList: builder.query({
      query: () => "/terms/quality-list",
      providesTags: ["EpicMovies"],
    }),

    // =================>> SINGLE MOVIE IMPORT(MUTATION) <<==============
    singleMovieImport: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/movie-import",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // =================>> BULK MOVIE IMPORT(MUTATION) <<================
    bulkMovieImport: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/movie-bulk-import",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useMovieListQuery,
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
  useGenreListQuery,
  useYearListQuery,
  useQualityListQuery,
  useSingleMovieImportMutation,
  useBulkMovieImportMutation,
} = movieApi;
export default movieApi;
