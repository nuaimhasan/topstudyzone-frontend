import { baseApi } from "./baseApi";

export const counterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCounter: builder.mutation({
      query: (formData) => ({
        url: `counter/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["counter"],
    }),
    updateCounter: builder.mutation({
      query: ({ id, formData }) => ({
        url: `counter/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["counter"],
    }),
    getAllCounter: builder.query({
      query: () => ({
        url: `counter/all-counters`,
        method: "GET",
      }),
      providesTags: ["counter"],
    }),
    getCounterById: builder.query({
      query: (id) => ({
        url: `counter/${id}`,
        method: "GET",
      }),
      providesTags: ["counter"],
    }),
    deleteCounter: builder.mutation({
      query: (id) => ({
        url: `counter/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["counter"],
    }),
  }),
});

export const {
  useCreateCounterMutation,
  useUpdateCounterMutation,
  useGetAllCounterQuery,
  useGetCounterByIdQuery,
  useDeleteCounterMutation,
} = counterApi;
