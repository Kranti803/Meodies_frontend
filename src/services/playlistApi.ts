import type { Iplaylist } from "../interfaces/playlistInterface";
import { myApi } from "./myApi";

export const playlistApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    createPlaylist: builder.mutation<
      { success: true; message: string },
      { playlistName: string; description: string }
    >({
      query: (playlistFormData) => ({
        method: "POST",
        url: "/playlist/create",
        body: playlistFormData,
      }),
      invalidatesTags:["Playlist"]
    }),

    getAllPlaylist: builder.query<
      { success: true; playlists: Iplaylist[] },
      void
    >({
      query: () => ({
        url: "/playlist/all",
      }),
    }),
    getAllPlaylistUser: builder.query<
      { success: true; playlists: Iplaylist[] },
      string
    >({
      query: (userId) => ({
        url: `/playlist/all/${userId}`,
      }),
      providesTags:["Playlist"]
    }),

    addToPlaylist: builder.mutation<
      { success: true; message: string },
      { playlistId: string; songId: string }
    >({
      query: ({ playlistId, songId }) => ({
        method: "PATCH",
        url: `/playlist/${playlistId}/add/${songId}`,
      }),
      invalidatesTags:["Playlist"]
    }),
    // removeSongFromPlaylist: builder.mutation<
    //   { success: true; message: string },
    //   { playlistId: string; songId: string }
    // >({
    //   query: ({ playlistId, songId }) => ({
    //     method: "PATCH",
    //     url: `/playlist/${playlistId}/add/${songId}`,
    //   }),
    // }),
    getAllPlaylistSongs: builder.query<
      { success: true; playlistWithSongs: Iplaylist },
      string
    >({
      query: (playlistId) => ({
        url: `/playlist/${playlistId}/songs`,
      }),
    }),
  }),
});

export const {
  useCreatePlaylistMutation,
  useGetAllPlaylistQuery,
  useAddToPlaylistMutation,
  useGetAllPlaylistUserQuery,
  useGetAllPlaylistSongsQuery,
} = playlistApi;
