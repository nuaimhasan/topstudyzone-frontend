import { baseApi } from "../baseApi";

export const subjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmissionSubjects: builder.query({
      query: () => ({
        url: `/api/admission/subject/all`,
        method: "GET",
      }),
      providesTags: ["admissionSubject"],
    }),

    getSingleAdmissionSubject: builder.query({
      query: (id) => ({
        url: `/api/admission/subject/${id}`,
        method: "GET",
      }),
      providesTags: ["admissionSubject"],
    }),

    addAdmissionSubject: builder.mutation({
      query: (info) => ({
        url: `/api/admission/subject/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["admissionSubject"],
    }),

    updateAdmissionSubject: builder.mutation({
      query: ({ id, info }) => ({
        url: `/api/admission/subject/edit/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["admissionSubject"],
    }),

    deleteAdmissionSubject: builder.mutation({
      query: (id) => ({
        url: `/api/admission/subject/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admissionSubject"],
    }),
  }),
});

export const {
  useGetAdmissionSubjectsQuery,
  useGetSingleAdmissionSubjectQuery,
  useAddAdmissionSubjectMutation,
  useUpdateAdmissionSubjectMutation,
  useDeleteAdmissionSubjectMutation,
} = subjectApi;
