import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  tagTypes: ["LikedSongs"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://melodies-backend-6.onrender.com/api",
    credentials: "include",
  }),
  endpoints: () => ({}), //extended in feature api slices
});
