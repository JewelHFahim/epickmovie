import apiSlice from "../api/apiSlice";

const settingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ====================>> ALL CONFIGS <<======================
    allConfig: builder.query({
      query: () => "/get-all-config-value",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> QUICK MENU  <<====================
    quickMenuUser: builder.query({
      query: () => "/get-quick-menu",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> Site Map URLS <<====================
    websiteLink: builder.query({
      query: () => "",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> User Rating<<====================

    userRating: builder.query({
      query: ({postId,ratingNo}) => `/do-vote/${postId}/${ratingNo}`,
      providesTags: ["EpicMovies"],
    }),

  }),
});

export const { useAllConfigQuery, useQuickMenuUserQuery,  useUserRatingQuery} =
  settingApi;
export default settingApi;
