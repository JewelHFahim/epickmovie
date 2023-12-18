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

    // ========================>> BANGLA <<=============================
    banglaMovieList: builder.query({
      query: () => "/sp-terms/bangla",
      providesTags: ["EpicMovies"],
    }),

    // ##################################################################
    // ############################## ADMIN ROUTES ######################
    // ##################################################################

    // =================>> SINGLE MOVIE IMPORT(MUTATION) <<==============
    singleMovieImport: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/movie-import",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    adminMovieDetails: builder.query({
      query: (id) => `/admin/get-movie/${id}`,
      providesTags: ["EpicMovies"],
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

    // ======================>> CREATE GENRE <<==========================
    createGenre: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-genre",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ======================>> CREATE QUALITY <<==========================
    createQuality: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-quality",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ======================>> AUDIO LIST <<==============================
    getAudioList: builder.query({
      query: () => `/admin/get-audio`,
      providesTags: ["EpicMovies"],
    }),

    // ====================>> CREATE AUDIO  <<=============================
    createAudio: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-audio",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ====================>> UPDATE MOVIE  <<=============================
    updateMovie: builder.mutation({
      query: ({data, id}) => ({
        method: "PUT",
        url: `/admin/movie-update/${id}`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ====================>> UPDATE USERE  <<=============================
    updateUser: builder.mutation({
      query: ({data, id}) => ({
        method: "PUT",
        url: `/admin/get-user-data/${id}`,
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
  useBanglaMovieListQuery,
  useAdminMovieDetailsQuery,
  useCreateGenreMutation,
  useCreateQualityMutation,
  useGetAudioListQuery,
  useCreateAudioMutation,
  useUpdateMovieMutation,
  useUpdateUserMutation
} = movieApi;
export default movieApi;
