import apiSlice from "../api/apiSlice";

const movieApi = apiSlice.injectEndpoints({


  // ============>> ALL MOVIES <<============
  endpoints: (builder) => ({
    movieList: builder.query({
      query: () => "/movies",
      providesTags: ["bollyflix"],
    }),
  }),

  
});

export const { useMovieListQuery } = movieApi;
export default movieApi;
