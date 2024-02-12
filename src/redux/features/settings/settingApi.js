import apiSlice from "../api/apiSlice";

const settingApi = apiSlice.injectEndpoints({
  
  endpoints: (builder) => ({

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

    // ====================>> FAVICON ICON <<======================
    favIcon: builder.query({
      query: () => "/get-config-value/fav_icon",
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useJoinTelegramUserQuery,
  useFooterUserQuery,
  useSiteLogoUserQuery,
  useSiteNameUSerQuery,
  useSiteNewsUserQuery,
  useQuickMenuUserQuery,
  useGlobalHeaderQuery,
  useGlobalFooterQuery,
  useFavIconQuery,
} = settingApi;
export default settingApi;
