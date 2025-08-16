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

    logoutUser: builder.mutation<{ success: boolean; message: string }, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
        credentials: "include",
      }),
    }),

    resendEmailVerificationLink: builder.mutation<{ success: boolean; message: string }, {email:string}>({
      query: (userEmail) => ({
        url: "/user/resend_email_verification_link",
        method: "POST",
        credentials: "include",
        body:userEmail
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
  useLogoutUserMutation,
  useResendEmailVerificationLinkMutation
} = authAPI;
