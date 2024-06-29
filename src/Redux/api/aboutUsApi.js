import { baseApi } from "./baseApi";

export const aboutUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAboutUs: builder.mutation({
      query: (formData) => ({
        url: `about/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["aboutUs"],
    }),

    updateAboutUs: builder.mutation({
      query: ({ id, formData }) => ({
        url: `about/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["aboutUs"],
    }),

    getAboutUs: builder.query({
      query: () => ({
        url: `about`,
        method: "GET",
      }),
      providesTags: ["aboutUs"],
    }),
  }),
});

export const {
  useCreateAboutUsMutation,
  useUpdateAboutUsMutation,
  useGetAboutUsQuery,
} = aboutUsApi;
