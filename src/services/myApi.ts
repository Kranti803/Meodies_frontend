import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4500/api",
    credentials: "include",
  }),
  endpoints: () => ({}), //extended in feature api slices
});
