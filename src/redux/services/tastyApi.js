import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tastyApi = createApi({
  reducerPath: "tastyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tasty.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_TASTY_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTags: builder.query({ query: () => "/tags/list" }),
    getRecipesByTagName: builder.query({
      query: ({ tagName, size }) =>
        `/recipes/list?from=0&size=${size}&tags=${tagName}`,
    }),
  }),
});

export const { useGetAllTagsQuery, useGetRecipesByTagNameQuery } = tastyApi;
