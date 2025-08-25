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
    deleteUser: builder.mutation<
      { success: true; message: string },
      { userId: string }
    >({
      query: ({ userId }) => ({
        url: `/admin/user/${userId}/delete`,
        method: "DELETE",
      }),
    }),
    deleteSong: builder.mutation<
      { success: true; message: string },
      { songId: string }
    >({
      query: ({ songId }) => ({
        url: `/admin/song/${songId}/delete`,
        method: "DELETE",
      }),
    }),
    deleteArtist: builder.mutation<
      { success: true; message: string },
      { artistId: string }
    >({
      query: ({ artistId }) => ({
        url: `/admin/artist/${artistId}/delete`,
        method: "DELETE",
      }),
    }),

    addArtist: builder.mutation<
      { success: true; message: string },
      { name: string; image: File }
    >({
      query: ({ name, image }) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("artist", image);

        return {
          url: `/admin/artist/add`,
          method: "POST",
          body: formData,
        };
      },
    }),
    uploadSong: builder.mutation<
      { success: true; message: string },
      File
    >({
      query: (song) => {
        const formData = new FormData();
        formData.append("audio", song);

        return {
          url: `/admin/upload_new_song`,
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useToggleUserRoleMutation,
  useDeleteUserMutation,
  useDeleteSongMutation,
  useDeleteArtistMutation,
  useAddArtistMutation,
  useUploadSongMutation
} = adminApi;
