import apiSlice from "../api/apiSlice";

const tvShowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ===========>>  Filter By GENRE/YEAR/QUALITY  <<=============

    filterResults: builder.query({
      query: (filteredTerm) => `/sp-terms/${filteredTerm}`,
      providesTags: ["EpicMovies"],
    }),

    filteredResultsByPagination: builder.query({
      query: ({ filteredTerm, pageNo }) => `/sp-terms/${filteredTerm}?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========>>  SEARCH By GENRE/YEAR/QUALITY  <<=============
    serachResults: builder.query({
      query: (searchTerm) => `/search/${searchTerm}`,
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
  useFilterResultsQuery,
  useSerachResultsQuery,
  useFilteredResultsByPaginationQuery,
  useSuggessionMovieSeriesQuery
} = tvShowApi;
export default tvShowApi;
