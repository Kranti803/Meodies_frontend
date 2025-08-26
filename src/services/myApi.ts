import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  tagTypes: ["LikedSongs"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    credentials: "include",
  }),
  endpoints: () => ({}), //extended in feature api slices
});
