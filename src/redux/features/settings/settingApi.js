import apiSlice from "../api/apiSlice";

const settingApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    
    // ====================>> Create Config  <<=====================
    listConfig: builder.query({
      query: () => "/admin/get-all-config-value",
      providesTags: ["EpicMovies"],
    }),


    // ====================>> Footer  <<=====================
    footerConfig: builder.query({
      query: () => "admin/get-config-value/site_footer",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> JOIN TELEGRAM  <<=====================
    joinTelegramConfig: builder.query({
      query: () => "/admin/get-config-value/telegram_link",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> SITE LOGO  <<=====================
    siteLogoConfig: builder.query({
      query: () => "/admin/get-config-value/site_logo",
      providesTags: ["EpicMovies"],
    }),

    
    // ====================>> Create Config  <<=====================
    createConfig: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/admin/set-config`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

  }),
});

export const { useListConfigQuery, useCreateConfigMutation, useFooterConfigQuery, useJoinTelegramConfigQuery, useSiteLogoConfigQuery } = settingApi;
export default settingApi;
