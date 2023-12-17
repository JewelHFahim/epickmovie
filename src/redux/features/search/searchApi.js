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

    // ===========>>  Filter By GENRE/YEAR/QUALITY  <<=============
    serachResults: builder.query({
      query: (searchTerm) => `/search/${searchTerm}`,
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useFilterResultsQuery,
  useSerachResultsQuery,
  useFilteredResultsByPaginationQuery,
} = tvShowApi;
export default tvShowApi;
