import apiSlice from "../api/apiSlice";

const settingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ###################### CLIENT ROUTES #######################

    // ==================>> JOIN TELEGRAM  <<=====================
    joinTelegramUser: builder.query({
      query: () => "/get-config-value/telegram_link",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> FOOTER <<=========================
    footerUser: builder.query({
      query: () => "/get-config-value/site_footer",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> SITE LOGO  <<======================
    siteLogoUser: builder.query({
      query: () => "/get-config-value/site_logo",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> SITE NAME  <<======================
    siteNameUSer: builder.query({
      query: () => "/get-config-value/site_name",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> SITE NEWS  <<=====================
    siteNewsUser: builder.query({
      query: () => "/get-config-value/site_news",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> QUICK MENU  <<=====================
    quickMenuUser: builder.query({
      query: () => "/get-quick-menu",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> GLOBAL HEADER  <<====================
    globalHeader: builder.query({
      query: () => "/get-config-value/global_header",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> GLOBAL FOOTER  <<====================
    globalFooter: builder.query({
      query: () => "/get-config-value/global_footer",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> FAVICON ICON <<====================
    favIcon: builder.query({
      query: () => "/get-config-value/fav_icon",
      providesTags: ["EpicMovies"],
    }),

    // ###################### ADMIN ROUTES ########################
    // ====================>> CONFIG LIST  <<=====================
    listConfig: builder.query({
      query: () => "/admin/get-all-config-value",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> WEBSITE LINK <<=====================
    websiteLink: builder.query({
      query: () => "/admin/get-config-value/website_link",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> TIME ZONE QUERY <<=====================
    timeZone: builder.query({
      query: () => "/admin/get-config-value/timezone",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> MOVIE SORT <<=====================
    movieSort: builder.query({
      query: () => "/admin/get-config-value/movie_order",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> TV SHOW SORT <<=====================
    tvshowSort: builder.query({
      query: () => "/admin/get-config-value/tv_order",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> CACHE TIME <<=====================
    cacheTime: builder.query({
      query: () => "/admin/get-config-value/cache_time",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> FOOTER <<=========================
    footerConfig: builder.query({
      query: () => "/admin/get-config-value/site_footer",
      providesTags: ["EpicMovies"],
    }),

    // ==================>> JOIN TELEGRAM  <<=====================
    joinTelegramConfig: builder.query({
      query: () => "/admin/get-config-value/telegram_link",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> SITE LOGO  <<======================
    siteLogoConfig: builder.query({
      query: () => "/admin/get-config-value/site_logo",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> SITE NAME  <<=======================
    siteNameConfig: builder.query({
      query: () => "/admin/get-config-value/site_name",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> SITE NEWS  <<======================
    siteNewsConfig: builder.query({
      query: () => "/admin/get-config-value/site_news",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> QUICK MENU  <<=====================
    quickMenu: builder.query({
      query: () => "/admin/get-quick-menu",
      providesTags: ["EpicMovies"],
    }),

    // ===================>> CREATE CONFIG  <<=====================
    createConfig: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "admin/set-config",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===================>> CREATE MENU  <<=======================
    createMenu: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/admin/create-quick-menu`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===================>> LOGO UPLOAD  <<=======================
    logoUpload: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/admin/upload-logo`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useListConfigQuery,
  useCreateConfigMutation,
  useFooterConfigQuery,
  useJoinTelegramConfigQuery,
  useSiteLogoConfigQuery,
  useSiteNewsConfigQuery,
  useSiteNameConfigQuery,
  useCreateMenuMutation,
  useQuickMenuQuery,
  useWebsiteLinkQuery,
  useLogoUploadMutation,
  useJoinTelegramUserQuery,
  useFooterUserQuery,
  useSiteLogoUserQuery,
  useSiteNameUSerQuery,
  useSiteNewsUserQuery,
  useQuickMenuUserQuery,
  useGlobalHeaderQuery,
  useGlobalFooterQuery,
  useTimeZoneQuery,
  useMovieSortQuery,
  useTvshowSortQuery,
  useCacheTimeQuery,
  useFavIconQuery,
} = settingApi;
export default settingApi;
