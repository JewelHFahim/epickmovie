import apiSlice from "../api/apiSlice";

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ========================>> ALL MOVIES <<===========================
    movieList: builder.query({
      query: () => "/movie-posts",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> BENGALI MOVIES <<==========================
    bengaliMovieList: builder.query({
      query: () => "/get-bengali-post",
      providesTags: ["EpicMovies"],
    }),

    // =================>>PER PAGE BENGALI MOVIE<<========================
    perPageBengaliMovieList: builder.query({
      query: (page) => `/get-bengali-post?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // ======================>>  SINGLE/MOVIE DETAILS <<==================
    movieDetails: builder.query({
      query: (movieId) => `/movie-post/${movieId}`,
      providesTags: ["EpicMovies"],
    }),

    // ===================>>  PAGINATION WISE MOVIE <<====================
    perPgaeMovie: builder.query({
      query: (pageNo) => `/movie-posts?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========================>> GENRE <<=============================
    genreList: builder.query({
      query: () => "/terms/genres-list",
      providesTags: ["EpicMovies"],
    }),

    // ===========================>> AUDIO <<=============================
    audListClient: builder.query({
      query: () => "/terms/audio-list",
      providesTags: ["EpicMovies"],
    }),

    // ===========================>> YEAR <<==============================
    yearList: builder.query({
      query: () => "/terms/year-list",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> PIXEL QUALITY <<==========================
    pixelQualityClient: builder.query({
      query: () => "/terms/px-quality-list",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> PRINT QUALITY <<=========================
    printQualityClient: builder.query({
      query: () => "/terms/pr-quality-list",
      providesTags: ["EpicMovies"],
    }),


    // ========================>> COUNTRY <<=============================
    countryListClient: builder.query({
      query: () => "/terms/get-countries",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> FEATURED POSTS <<=========================
    featuredPosts: builder.query({
      query: () => "/get-feathers-posts",
      providesTags: ["EpicMovies"],
    }),


  }),
});

export const {
  useMovieListQuery,
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
  useGenreListQuery,
  useYearListQuery,
  useBengaliMovieListQuery,
  usePerPageBengaliMovieListQuery,
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
  useAudListClientQuery,
  useCountryListClientQuery,
  useFeaturedPostsQuery
} = movieApi;
export default movieApi;
