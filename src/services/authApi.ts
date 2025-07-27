import type {
  IRegisterPlayload,
  IRegisterResponse,
  ILoginResponse,
  ILoginPayload,
} from "../interfaces/authInterfaces";
import { myApi } from "./myApi";

export const authAPI = myApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterResponse, IRegisterPlayload>({
      //mutation<ResultType,ArgumentType>
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),

    loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
        credentials: "include",
      }),
    }),

    logoutUser: builder.query<{ success: boolean; message: string }, void>({
      query: () => ({
        url: "/user/logout",
        credentials: "include",
      }),
    }),
    getProfile: builder.query<ILoginResponse, void>({
      query: () => ({
        url: "/user/profile",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetProfileQuery,
  useLoginUserMutation,
  useLazyLogoutUserQuery,
} = authAPI;
