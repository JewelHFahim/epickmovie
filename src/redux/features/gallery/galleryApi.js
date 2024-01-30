import apiSlice from "../api/apiSlice";

const galleryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ###################### ADMIN ROUTES ########################
    // ====================>> Gallery LIST  <<=====================
    galleryList: builder.query({
      query: () => "/admin/image-gallery",
      providesTags: ["EpicMovies"],
    }),

    // ===================>> DELETE IMAGE <<=======================
    deleteImage: builder.mutation({
      query: (url) => ({
        method: "DELETE",
        url: `/admin/delete-image/${url}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ===================>> UPLOAD IMAGE <<=======================
    uploadImage: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/admin/upload-image`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),
  }),
});

export const { useGalleryListQuery, useDeleteImageMutation, useUploadImageMutation } = galleryApi;
export default galleryApi;
