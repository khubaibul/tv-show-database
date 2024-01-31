import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const showsApi = createApi({
  reducerPath: "showsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com/search/shows?q=all",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getShows: builder.query({
      query: () => "",
      providesTags: [],
    }),
    getShowById: builder.query({
      query: (id) => `show/${id}`,
    }),
  }),
});

export const { useGetShowsQuery, useGetShowByIdQuery } = showsApi;
