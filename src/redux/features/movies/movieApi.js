import apiSlice from "../api/apiSlice";

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // =================>>PER PAGE BENGALI MOVIE <<========================
    perPageBengaliMovieList: builder.query({
      query: (page) => `/get-bengali-post?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =================>> PER PAGE HINDI MOVIE <<=========================
    perPageHindiMovieList: builder.query({
      query: (page) => `/sp-terms/india?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =================>> HINDI MOVIE LIST THEME-2 <<=========================
    hindiMovieListTHeme2: builder.query({
      query: (page) => `/sp-terms/india/60?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =============>> PER PAGE BANGLA MOVIE THEME-1 <<====================
    perPageBanglaMovieListTheme1: builder.query({
      query: (page) => `/sp-terms/bangla?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

     // =============>> PER PAGE BANGLA MOVIE THEME-2 <<====================
     banglaMovieListTheme2: builder.query({
      query: (page) => `/sp-terms/bangla/60?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

     // =============>> PER PAGE BANGLA MOVIE THEME-3 <<====================
     banglaMovieListTheme3: builder.query({
      query: ({quantity, page}) => `/sp-terms/bangla/${quantity}?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =============>> MOVIE LIST THEME-2 <<====================
    perPageMovieListTheme2: builder.query({
      query: (page) => `/movie-posts/60?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =============>> MOVIE LIST THEME-3 <<====================
    movieListTheme3: builder.query({
      query: ({quantity, page}) => `/movie-posts/${quantity}?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =================>> PER PAGE English MOVIE <<========================
    perPageEnglishMovieList: builder.query({
      query: (page) => `/sp-terms/united-states-of-america?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // =================>> ENGLISH MOVIE LIST THEME 2 <<========================
    englishMovieListTheme2: builder.query({
      query: (page) => `/sp-terms/united-states-of-america/60?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // ======================>> SINGLE MOVIE DETAILS <<====================
    movieDetails: builder.query({
      query: (movieId) => `/movie-post/${movieId}`,
      providesTags: ["EpicMovies"],
    }),

    // ===================>> PAGINATION WISE MOVIE <<======================
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
  useUpCommingPostsQuery,
  useCountryListClientQuery,
  usePrintQualityClientQuery,
  usePixelQualityClientQuery,
  useHindiMovieListTHeme2Query,
  usePerPageHindiMovieListQuery,
  useBanglaMovieListTheme2Query,
  usePerPageMovieListTheme2Query,
  useEnglishMovieListTheme2Query,
  usePerPageEnglishMovieListQuery,
  usePerPageBengaliMovieListQuery,
  usePerPageBanglaMovieListTheme1Query,

  useMovieListTheme3Query,
  useBanglaMovieListTheme3Query
} = movieApi;
export default movieApi;
