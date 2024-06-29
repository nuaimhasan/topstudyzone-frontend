import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addService: builder.mutation({
      query: (formData) => ({
        url: `service/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),
    updateServiceById: builder.mutation({
      query: ({ id, formData }) => ({
        url: `service/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),
    getServiceById: builder.query({
      query: (id) => ({
        url: `service/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    getAllServices: builder.query({
      query: () => ({
        url: `service/all-services`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    deleteServiceById: builder.mutation({
      query: (id) => ({
        url: `service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
    getServiceBySlug: builder.query({
      query: (slug) => ({
        url: `service/slug/${slug}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useUpdateServiceByIdMutation,
  useGetServiceByIdQuery,
  useGetAllServicesQuery,
  useDeleteServiceByIdMutation,
  useGetServiceBySlugQuery,
} = serviceApi;
