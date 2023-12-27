import apiSlice from "../api/apiSlice";

const settingApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    
    // ====================>> Config List  <<=====================
    listConfig: builder.query({
      query: () => "/admin/get-all-config-value",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> Footer <<=========================
    footerConfig: builder.query({
      query: () => "admin/get-config-value/site_footer",
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

    // =====================>> SITE NAME  <<======================
    siteNameConfig: builder.query({
      query: () => "/admin/get-config-value/site_name",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> SITE NEWS  <<=====================
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
        url: `/admin/set-config`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),


    // ===================>> CREATE MENU  <<=====================
    createMenu: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/admin/create-quick-menu`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

  }),
});

export const { useListConfigQuery, useCreateConfigMutation, useFooterConfigQuery, useJoinTelegramConfigQuery, useSiteLogoConfigQuery, useSiteNewsConfigQuery, useSiteNameConfigQuery, useCreateMenuMutation, useQuickMenuQuery } = settingApi;
export default settingApi;
