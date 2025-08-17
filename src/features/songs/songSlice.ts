import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Isong } from "../../interfaces/songInterface";

interface SongsInterface {
  songs: Isong[];
}
const initialState: SongsInterface = {
  songs: [],
};

const songSlice = createSlice({
  name: "songs ",
  initialState,
  reducers: {
    setAllSongs: (state, action: PayloadAction<Isong[]>) => {
      state.songs = action.payload;
    },
  },
});

export const { setAllSongs } = songSlice.actions;
export default songSlice.reducer;
