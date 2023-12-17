import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({


    userList: builder.query({
      query: () => "/admin/user-list",
      providesTags: ["EpicMovies"],
    }),

    singleUserDetails: builder.query({
      query: (userId) => `/admin/get-user-data/${userId}`,
      providesTags: ["EpicMovies"],
    }),


    userRoleList: builder.query({
      query: () => "/admin/role-list",
      providesTags: ["EpicMovies"],
    }),


  }),
});

export const { useUserListQuery, useUserRoleListQuery, useSingleUserDetailsQuery } = userApi;
export default userApi;
