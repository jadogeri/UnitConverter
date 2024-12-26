import { apiSlice } from "./apiSlice";

export const recordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    updateRecords: builder.mutation({
        query: ( {service_name  }) => ({
            url: "/records",
            method: "PUT",
            body: {service_name },
        })
    }),  


    fetchRecords: builder.query({
        query: () => `/records`,
      }),
  }),
});

export const {
  
    useUpdateRecordsMutation,  
    useFetchRecordsQuery

} = recordApiSlice;


