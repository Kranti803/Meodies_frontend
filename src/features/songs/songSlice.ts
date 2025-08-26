import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Isong } from "../../interfaces/songInterface";

export interface SongsInterface {
  songs: Isong[];
  topSongs: Isong[];
  currentSongPlayingIndex: number;
  isPlaying: boolean;
  isMute: boolean;
  autoPlay: boolean;
  currentSong: Isong | null;
  currentSongTotalDuration: number;
  volume: number;
  isRepeat: boolean;
  // suffle: boolean;
  trendingSongs: Isong[];
}
const initialState: SongsInterface = {
  songs: [],
  topSongs: [],
  currentSongPlayingIndex: 0,
  isPlaying: false,
  isMute: false,
  autoPlay: false,
  currentSong: null,
  currentSongTotalDuration: 0,
  volume: 1,
  isRepeat: false,
  trendingSongs: [],
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setAllSongs: (
      state,
      action: PayloadAction<{ songs: Isong[]; topSongs: Isong[] }>
    ) => {
      state.songs = action.payload.songs;
      state.topSongs = action.payload.topSongs;
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
    setCurrentSong: (state, action: PayloadAction<Isong>) => {
      state.currentSong = action.payload;
    },
    setCurrentSongPlayingIndex: (state, action: PayloadAction<number>) => {
      state.currentSongPlayingIndex = action.payload;
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

    setTrendingSongs: (state) => {
      if (state.songs)
        state.trendingSongs = state.songs.filter((song) => song.trending);
    },
  },
});

export const {
  setAllSongs,
  setIsPlaying,
  setIsMute,
  setAutoPlay,
  setCurrentSong,
  setCurrentSongTotalDuration,
  setVolume,
  setIsRepeat,
  setTrendingSongs,
  setCurrentSongPlayingIndex,
} = songSlice.actions;
export default songSlice.reducer;
