import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostType } from "../features/posts/postsTypes.ts";

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], number>({
      query: (limit) => `/posts?_limit=${limit}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },

      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getPost: builder.query<PostType, string>({
      query: (id) => `/posts/${id}`,
    })
  })
});

export const { useGetPostsQuery, useGetPostQuery } = postApi;