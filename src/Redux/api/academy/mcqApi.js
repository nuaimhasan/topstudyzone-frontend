import { baseApi } from "../baseApi";

export const mcqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademyMCQ: builder.query({
      query: (subject) => ({
        url: `/api/academy/mcq/all?subject=${subject}`,
        method: "GET",
      }),
      providesTags: ["mcq"],
    }),

    getSingleAcademyMCQ: builder.query({
      query: (id) => ({
        url: `/api/academy/mcq/${id}`,
        method: "GET",
      }),
      providesTags: ["mcq"],
    }),

    addAcademyMCQ: builder.mutation({
      query: (info) => ({
        url: `/api/academy/mcq/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["mcq"],
    }),

    updateAcademyMCQ: builder.mutation({
      query: ({ id, info }) => ({
        url: `/api/academy/mcq/edit/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["mcq"],
    }),

    deleteAcademyMCQ: builder.mutation({
      query: (id) => ({
        url: `/api/academy/mcq/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mcq"],
    }),
  }),
});

export const {
  useGetAcademyMCQQuery,
  useGetSingleAcademyMCQQuery,
  useAddAcademyMCQMutation,
  useUpdateAcademyMCQMutation,
  useDeleteAcademyMCQMutation,
} = mcqApi;
