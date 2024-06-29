import { baseApi } from "./baseApi";

export const serviceBannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addServiceBanner: builder.mutation({
      query: (formData) => ({
        url: `serviceBanner/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["serviceBanner"],
    }),
    updateServiceBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `serviceBanner/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["serviceBanner"],
    }),
    getServiceBanner: builder.query({
      query: () => ({
        url: `serviceBanner`,
        method: "GET",
      }),
      providesTags: ["serviceBanner"],
    }),
  }),
});

export const {
  useAddServiceBannerMutation,
  useUpdateServiceBannerMutation,
  useGetServiceBannerQuery,
} = serviceBannerApi;
