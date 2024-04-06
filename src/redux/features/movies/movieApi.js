import apiSlice from "../api/apiSlice";

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // =================>>PER PAGE BENGALI MOVIE <<========================
    perPageBengaliMovieList: builder.query({
      query: (page) => `/get-bengali-post?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =================>> PER PAGE HINDI MOVIE <<========================
    perPageHindiMovieList: builder.query({
      query: (page) => `/sp-terms/india?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =================>> PER PAGE English MOVIE <<========================
    perPageEnglishMovieList: builder.query({
      query: (page) => `/sp-terms/united-states-of-america?page=${page}`,
      providesTags: ["EpicMovies"],
    }),


    // ======================>> SINGLE MOVIE DETAILS <<===================
    movieDetails: builder.query({
      query: (movieId) => `/movie-post/${movieId}`,
      providesTags: ["EpicMovies"],
    }),

    // ===================>> PAGINATION WISE MOVIE <<=====================
    perPgaeMovie: builder.query({
      query: (pageNo) => `/movie-posts?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========================>> GENRE <<=============================
    genreList: builder.query({
      query: () => "/terms/genres-list",
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

    // =====================>> UpComming POSTS <<=========================
    upCommingPosts: builder.query({
      query: () => "/upcoming-posts",
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useYearListQuery,
  useGenreListQuery,
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
  useFeaturedPostsQuery,
  useCountryListClientQuery,
  usePrintQualityClientQuery,
  usePixelQualityClientQuery,
  usePerPageBengaliMovieListQuery,
  usePerPageHindiMovieListQuery,
  usePerPageEnglishMovieListQuery,
  useUpCommingPostsQuery,
} = movieApi;
export default movieApi;
