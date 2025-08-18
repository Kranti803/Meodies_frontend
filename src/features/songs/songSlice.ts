import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Isong } from "../../interfaces/songInterface";

interface SongsInterface {
  songs: Isong[];
  currentSongPlayingIndex: number | 0;
}
const initialState: SongsInterface = {
  songs: [],
  currentSongPlayingIndex: 0,
};

const songSlice = createSlice({
  name: "songs ",
  initialState,
  reducers: {
    setAllSongs: (state, action: PayloadAction<Isong[]>) => {
      state.songs = action.payload;
    },
    setcurrentSongPlayingIndex: (state, action: PayloadAction<number>) => {
      state.currentSongPlayingIndex = action.payload;
    },
  },
});

export const { setAllSongs,setcurrentSongPlayingIndex } = songSlice.actions;
export default songSlice.reducer;
