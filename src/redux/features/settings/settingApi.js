import apiSlice from "../api/apiSlice";

const settingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ====================>> Create Config  <<=====================
    listConfig: builder.query({
      query: () => "/admin/get-all-config-value",
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

export const { useCreateConfigMutation } = settingApi;
export default settingApi;
