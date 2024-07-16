import { baseApi } from "../baseApi";

export const chapterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmissionChapters: builder.query({
      query: (query) => ({
        url: `/api/admission/chapter/all`,
        method: "GET",
        params: query,
      }),
      providesTags: ["admissionChapter"],
    }),

    getSingleAdmissionChapter: builder.query({
      query: (id) => ({
        url: `/api/admission/chapter/${id}`,
        method: "GET",
      }),
      providesTags: ["admissionChapter"],
    }),

    addAdmissionChapter: builder.mutation({
      query: (info) => ({
        url: `/api/admission/chapter/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["admissionChapter"],
    }),

    updateAdmissionChapter: builder.mutation({
      query: ({ id, info }) => ({
        url: `/api/admission/chapter/edit/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["admissionChapter"],
    }),

    deleteAdmissionChapter: builder.mutation({
      query: (id) => ({
        url: `/api/admission/chapter/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admissionChapter"],
    }),
  }),
});

export const {
  useGetAdmissionChaptersQuery,
  useGetSingleAdmissionChapterQuery,
  useAddAdmissionChapterMutation,
  useUpdateAdmissionChapterMutation,
  useDeleteAdmissionChapterMutation,
} = chapterApi;
