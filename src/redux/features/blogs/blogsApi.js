import apiSlice from "../api/apiSlice";

const blogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ===========>> Get All Blogs  <<=============
    getAllBlogs: builder.query({
      query: () => `/blog/get-list`,
      providesTags: ["EpicMovies"],
    }),

    // ===========>> Get Single Blogs  <<=============
    getSeingleBlog: builder.query({
      query: (id) => `/blog/post/${id}`,
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSeingleBlogQuery } = blogsApi;
export default blogsApi;
