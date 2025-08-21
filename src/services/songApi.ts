import { setAllSongs, setCurrentSong } from "../features/songs/songSlice";
import { myApi } from "./myApi";
import { type Isong } from "../interfaces/songInterface";
import type { Iartist } from "../interfaces/artistsInterface";

export const songApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSongs: builder.query<{ success: true; songs: Isong[] }, void>({
      query: () => ({
        url: "/song/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        //first param is arg
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(setAllSongs(data.songs)); // saving songs to store
            dispatch(setCurrentSong(data.songs[0])); //setting the first song on the initail load
          }
        } catch (error) {
          console.error("Failed to fetch songs:", error);
        }
      },
    }),
    getAllArtists: builder.query<{ success: true; artists: Iartist[] }, void>({
      query: () => ({
        url: "/artist/all",
      }),
    }),
    getArtistSong: builder.query<{ success: true; songs: Isong[] }, string>({
      query: (artistId) => ({
        url: `/artist/${artistId}/songs`,
      }),
    }),
  }),
});

export const { useGetAllSongsQuery, useGetAllArtistsQuery, useGetArtistSongQuery } = songApi;
