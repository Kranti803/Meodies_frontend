import type {
  IRegisterPlayload,
  IRegisterResponse,
  ILoginResponse,
  ILoginPayload,
} from "../interfaces/authInterfaces";
import { myApi } from "./myApi";

export const authAPI = myApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register user
    registerUser: builder.mutation<IRegisterResponse, IRegisterPlayload>({
      //mutation<ResultType,ArgumentType>
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),

    // // Login user
    loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
        credentials:'include'
      }),
    }),

    // // Logout user
    // logoutUser: builder.mutation<void, void>({
    //   query: () => ({
    //     url: "/auth/logout",
    //     method: "POST",
    //   }),
    // }),
    getProfile: builder.query<ILoginResponse,void>({
      query: () => ({
        url: "/user/profile",
        credentials:'include'
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useGetProfileQuery, useLoginUserMutation } = authAPI;
