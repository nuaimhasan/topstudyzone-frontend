import { baseApi } from "../baseApi";

export const modelTestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademyModelTest: builder.query({
      query: (query) => ({
        url: `/api/academy/modelTest/all`,
        method: "GET",
        params: query,
      }),
      providesTags: ["modelTest"],
    }),

    getSingleAcademyModelTest: builder.query({
      query: (id) => ({
        url: `/api/academy/modelTest/${id}`,
        method: "GET",
      }),
      providesTags: ["modelTest"],
    }),

    addAcademyModelTest: builder.mutation({
      query: (examInfo) => ({
        url: `/api/academy/modelTest/add`,
        method: "POST",
        body: examInfo,
      }),
      invalidatesTags: ["modelTest"],
    }),

    updateAcademyModelTest: builder.mutation({
      query: ({ id, info }) => ({
        url: `/api/academy/modelTest/edit/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["modelTest"],
    }),

    deleteAcademyModelTest: builder.mutation({
      query: (id) => ({
        url: `/api/academy/modelTest/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["modelTest"],
    }),
  }),
});

export const {
  useGetAcademyModelTestQuery,
  useGetSingleAcademyModelTestQuery,
  useAddAcademyModelTestMutation,
  useUpdateAcademyModelTestMutation,
  useDeleteAcademyModelTestMutation,
} = modelTestApi;
