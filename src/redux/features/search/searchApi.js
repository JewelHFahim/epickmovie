import apiSlice from "../api/apiSlice";

const tvShowApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    // ===========>>  Filter By GENRE/YEAR/QUALITY  <<=============
    filteredResultsByPagination: builder.query({
      query: ({ filteredTerm, currentPage }) => `/sp-terms/${filteredTerm}?page=${currentPage}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========>>  Filter Results THEME-2 <<=============
    filteredResultsTheme2: builder.query({
      query: ({ filteredTerm, currentPage }) => `/sp-terms/${filteredTerm}/60?page=${currentPage}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========>>  Filter Results THEME-2 <<=============
    filteredResultsTheme3: builder.query({
      query: ({ filteredTerm, quantity, currentPage }) => `/sp-terms/${filteredTerm}/${quantity}?page=${currentPage}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========>>  SEARCH By GENRE/YEAR/QUALITY  <<=============
    serachResults: builder.query({
      query: ({ searchTerm, currentPage }) => `/search/${searchTerm}?page=${currentPage}`,
      providesTags: ["EpicMovies"],
    }),

    // ==============>>  MOVIE / SERIES SUGGESSION <<===============
    suggessionMovieSeries: builder.query({
      query: (id) => `/get-post-suggession/${id}`,
      providesTags: ["EpicMovies"],
    }),
    
  }),
});

export const {
  useSerachResultsQuery,
  useFilteredResultsTheme2Query,
  useSuggessionMovieSeriesQuery,
  useFilteredResultsByPaginationQuery,
  useFilteredResultsTheme3Query
} = tvShowApi;
export default tvShowApi;
