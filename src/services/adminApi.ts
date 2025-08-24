import { type IUser } from "../interfaces/authInterfaces";
import { myApi } from "./myApi";

export const adminApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<{ success: true; users: IUser[] }, void>({
      query: () => ({
        url: "/admin/users",
      }),
    }),
    toggleUserRole: builder.mutation<
      { success: true; message: string },
      { userId: string }
    >({
      query: ({ userId }) => ({
        url: `/admin/user/${userId}/role`,
        method: "PATCH",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useToggleUserRoleMutation } = adminApi;
