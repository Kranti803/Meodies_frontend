import type {
  IRegisterPlayload,
  IRegisterResponse,
  ILoginResponse,
  ILoginPayload,
  IResetPasswordPayload,
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

    confirmEmailVerification: builder.query<
      { success: boolean; message: string },
      { userId: string,token:string }
    >({
      query: ({userId,token}) => ({
        url: `/user/email_verify/${userId}/${token}`,
        credentials: "include",
      }),
    }),
    resendEmailVerificationLink: builder.mutation<
      { success: boolean; message: string },
      { email: string }
    >({
      query: (userEmail) => ({
        url: "/user/resend_email_verification_link",
        method: "POST",
        credentials: "include",
        body: userEmail,
      }),
    }),
    getProfile: builder.query<ILoginResponse, void>({
      query: () => ({
        url: "/user/profile",
        credentials: "include",
      }),
    }),
    forgotPassword: builder.mutation<
      { success: boolean; message: string },
      { email: string }
    >({
      query: (email) => ({
        url: "/user/forgot_password",
        method: "POST",
        body: email,
      }),
    }),

    resetPassword: builder.mutation<
      { success: boolean; message: string },
      IResetPasswordPayload
    >({
      query: ({ resetToken, newPassword }) => ({
        url: `/user/reset_password/${resetToken}`,
        method: "POST",
        body: { newPassword },
        headers: {
          "Content-Type": "application/json", // setting JSON header
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetProfileQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
  useResendEmailVerificationLinkMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useConfirmEmailVerificationQuery
} = authAPI;
