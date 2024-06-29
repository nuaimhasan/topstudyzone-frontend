import { baseApi } from "./baseApi";
const URL = "serviceSection";

export const serviceSectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServiceSections: builder.query({
      query: () => ({
        url: `${URL}`,
        method: "GET",
      }),
      providesTags: ["serviceSection"],
    }),
    updateServiceSectionById: builder.mutation({
      query: ({ id, body }) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["serviceSection"],
    }),
  }),
});

export const {
  useGetServiceSectionsQuery,
  useUpdateServiceSectionByIdMutation,
} = serviceSectionApi;
