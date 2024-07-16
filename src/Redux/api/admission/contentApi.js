import { baseApi } from "../baseApi";

export const contentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmissionContents: builder.query({
      query: (query) => ({
        url: `/api/admission/content/all`,
        method: "GET",
        params: query,
      }),
      providesTags: ["admissionContent"],
    }),

    getSingleAdmissionContent: builder.query({
      query: (id) => ({
        url: `/api/admission/content/${id}`,
        method: "GET",
      }),
      providesTags: ["admissionContent"],
    }),

    addAdmissionContent: builder.mutation({
      query: (info) => ({
        url: `/api/admission/content/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["admissionContent"],
    }),

    updateAdmissionContent: builder.mutation({
      query: ({ id, info }) => ({
        url: `/api/admission/content/edit/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["admissionContent"],
    }),

    deleteAdmissionContent: builder.mutation({
      query: (id) => ({
        url: `/api/admission/content/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admissionContent"],
    }),
  }),
});

export const {
  useGetAdmissionContentsQuery,
  useGetSingleAdmissionContentQuery,
  useAddAdmissionContentMutation,
  useUpdateAdmissionContentMutation,
  useDeleteAdmissionContentMutation,
} = contentApi;
