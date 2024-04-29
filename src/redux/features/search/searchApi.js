import apiSlice from "../api/apiSlice";

const tvShowApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    // ===========>>  Filter By GENRE/YEAR/QUALITY  <<=============
    filteredResultsByPagination: builder.query({
      query: ({ filteredTerm, currentPage }) => `/sp-terms/${filteredTerm}?page=${currentPage}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========>>  SEARCH By GENRE/YEAR/QUALITY  <<=============
    serachResults: builder.query({
      // query: ({ searchTerm, currentPage }) => `/sp-terms/${searchTerm}?page=${currentPage}`,
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
  useFilteredResultsByPaginationQuery,
  useSuggessionMovieSeriesQuery,
} = tvShowApi;
export default tvShowApi;
