import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Isong } from "../../interfaces/songInterface";

interface SongsInterface {
  songs: Isong[];
  currentSongPlayingIndex: number;
  isPlaying: boolean;
  isMute: boolean;
  autoPlay: boolean;
  currentSong: number;
  currentSongTotalDuration: number;
  volume: number;
  isRepeat: boolean;
  // suffle: boolean;
}
const initialState: SongsInterface = {
  songs: [],
  currentSongPlayingIndex: 0,
  isPlaying: false,
  isMute: false,
  autoPlay: false,
  currentSong: 0,
  currentSongTotalDuration: 0,
  volume: 1,
  isRepeat: false,
  // suffle: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setAllSongs: (state, action: PayloadAction<Isong[]>) => {
      state.songs = action.payload;
    },
    setCurrentSongPlayingIndex: (state, action: PayloadAction<number>) => {
      state.currentSongPlayingIndex = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsMute: (state, action: PayloadAction<boolean>) => {
      state.isMute = action.payload;
    },
    setAutoPlay: (state, action: PayloadAction<boolean>) => {
      state.autoPlay = action.payload;
    },
    setCurrentSong: (state, action: PayloadAction<number>) => {
      state.currentSong = action.payload;
    },
  
    setCurrentSongTotalDuration: (state, action: PayloadAction<number>) => {
      state.currentSongTotalDuration = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setIsRepeat: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload;
    },
    // setIsSuffle: (state, action: PayloadAction<boolean>) => {
    //   state.suffle = action.payload;
    // },
  },
});

export const {
  setAllSongs,
  setCurrentSongPlayingIndex,
  setIsPlaying,
  setIsMute,
  setAutoPlay,
  setCurrentSong,
  setCurrentSongTotalDuration,
  setVolume,
  setIsRepeat,
} = songSlice.actions;
export default songSlice.reducer;



