import { baseApi } from "../baseApi";

export const mcqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmissionMCQ: builder.query({
      query: (query) => ({
        url: `/api/admission/mcq/all`,
        method: "GET",
        params: query,
      }),
      providesTags: ["mcq"],
    }),

    getSingleAdmissionMCQ: builder.query({
      query: (id) => ({
        url: `/api/admission/mcq/${id}`,
        method: "GET",
      }),
      providesTags: ["mcq"],
    }),

    addAdmissionMCQ: builder.mutation({
      query: (info) => ({
        url: `/api/admission/mcq/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["mcq"],
    }),

    updateAdmissionMCQ: builder.mutation({
      query: ({ id, info }) => ({
        url: `/api/admission/mcq/edit/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["mcq"],
    }),

    deleteAdmissionMCQ: builder.mutation({
      query: (id) => ({
        url: `/api/admission/mcq/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mcq"],
    }),
  }),
});

export const {
  useGetAdmissionMCQQuery,
  useGetSingleAdmissionMCQQuery,
  useAddAdmissionMCQMutation,
  useUpdateAdmissionMCQMutation,
  useDeleteAdmissionMCQMutation,
} = mcqApi;
