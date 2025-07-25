import type {
  IRegisterPlayload,
  IRegisterUserResponse,
} from "../interfaces/userInterface";
import { myApi } from "./myApi";

export const authAPI = myApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register user
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterPlayload>({//mutation<ResultType,ArgumentType>
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),

    // // Login user
    // loginUser: builder.mutation<User, LoginPayload>({
    //   query: (credentials) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: credentials,
    //   }),
    // }),

    // // Logout user
    // logoutUser: builder.mutation<void, void>({
    //   query: () => ({
    //     url: "/auth/logout",
    //     method: "POST",
    //   }),
    // }),
  }),
});

export const { useRegisterUserMutation } = authAPI;
