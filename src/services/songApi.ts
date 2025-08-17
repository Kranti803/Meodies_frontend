import { setAllSongs } from "../features/songs/songSlice";
import { myApi } from "./myApi";
import { type Isong } from "../interfaces/songInterface";

export const songApi = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSongs: builder.query<{ success: true; songs: Isong[] }, void>({
      query: () => ({
        url: "/song/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) { //first param is arg
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(setAllSongs(data.songs)); // saving songs to store
          }
        } catch (error) {
          console.error("Failed to fetch songs:", error);
        }
      },
    }),
  }),
});

export const { useGetAllSongsQuery } = songApi;
