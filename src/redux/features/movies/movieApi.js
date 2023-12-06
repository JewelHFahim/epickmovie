import apiSlice from "../api/apiSlice";

const movieApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    // ==========================>> ALL MOVIES <<===========================
    movieList: builder.query({
      query: () => "/movie-posts",
      providesTags: ["bollyflix"],
    }),

    // ========================>>  MOVIE DETAILS <<=======================
    movieDetails: builder.query({
      query: (movieId) => `/movie-post/${movieId}`,
      providesTags: ["bollyflix"],
    }),

    // ===================>>  PAGINATION WISE MOVIE <<====================
    perPgaeMovie: builder.query({
      query: (pageNo) => `/movie-posts?page=${pageNo}`,
      providesTags: ["bollyflix"],
    }),

      // ==========================>> GENRE <<===========================
      genreList: builder.query({
        query: () => "/terms/genres-list",
        providesTags: ["bollyflix"],
      }),

      // ==========================>> YEAR <<============================
      yearList: builder.query({
        query: () => "/terms/year-list",
        providesTags: ["bollyflix"],
      }),

      // ========================>> QUALITY <<============================
      qualityList: builder.query({
        query: () => "/terms/quality-list",
        providesTags: ["bollyflix"],
      }),


  }),
});

export const { useMovieListQuery, useMovieDetailsQuery, usePerPgaeMovieQuery, useGenreListQuery, useYearListQuery, useQualityListQuery } =
  movieApi;
export default movieApi;
