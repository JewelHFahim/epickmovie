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
    siteMapDownload: builder.query({
      query: () => "/admin/sitemap-download",
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useAllConfigQuery,
  useQuickMenuUserQuery,
  useSiteMapDownloadQuery,
} = settingApi;
export default settingApi;
