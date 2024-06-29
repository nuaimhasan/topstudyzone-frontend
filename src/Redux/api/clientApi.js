import { baseApi } from "./baseApi";

export const clientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addClient: builder.mutation({
      query: (formData) => ({
        url: `client/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["client"],
    }),
    getClients: builder.query({
      query: () => ({
        url: `client/all-clients`,
        method: "GET",
      }),
      providesTags: ["client"],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `client/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["client"],
    }),
  }),
});

export const {
  useAddClientMutation,
  useGetClientsQuery,
  useDeleteClientMutation,
} = clientApi;
