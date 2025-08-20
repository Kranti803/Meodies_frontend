import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setIsPlaying,
  setAutoPlay,
  setCurrentSong,
  setVolume,
  setCurrentSongTotalDuration,
} from "../features/songs/songSlice";
import MusicPlayerProgressBar from "./MusicPlayerProgressBar";
import PlayerVolume from "./PlayerVolume";
import PlayerControlsButtons from "./PlayerControlsButtons";
import PlayerSongInfo from "./PlayerSongInfo";

const MusicPlayer = () => {
  const { currentSongPlayingIndex } = useAppSelector((state) => state.song);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [progress, setProgress] = useState(0);

  console.log("re-render from main player comp");

  const {
    songs,
    isPlaying,
    isRepeat,
    isMute,
    autoPlay,
    currentSong,
    currentSongTotalDuration,
  } = useAppSelector((state) => state.song);

  const dispatch = useAppDispatch();

  const handlePlay = useCallback(() => {
    if (!isPlaying) {
      dispatch(setIsPlaying(true));
      audioRef?.current?.play();
    } else {
      dispatch(setIsPlaying(false));
      audioRef?.current?.pause();
    }
  }, [isPlaying]);

  const handleSeekTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) audioRef.current.currentTime = Number(e.target.value);
  };

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = Number(e.target.value);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
        dispatch(setVolume(newVolume));
      }
    },
    []
  );

  const handleNext = useCallback(() => {
    if (currentSong < songs.length - 1) {
      dispatch(setIsPlaying(true));
      dispatch(setCurrentSong(currentSong + 1));
      dispatch(setAutoPlay(true));
    }
  }, [currentSong,songs]);

  const handlePrev = useCallback(() => {
    if (currentSong === 0) {
      // Restart song if already at the first one
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        dispatch(setIsPlaying(true));
        dispatch(setAutoPlay(true));
      }
      return;
    }

    dispatch(setCurrentSong(currentSong - 1));
    dispatch(setIsPlaying(true));
  }, [currentSong]);

  const handleLoadedMetaData = () => {
    if (audioRef.current) {
      dispatch(setCurrentSongTotalDuration(audioRef.current.duration));
      dispatch(setVolume(audioRef.current.volume));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setProgress(audioRef.current.currentTime);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleSongEnded = () => dispatch(setIsPlaying(false));
    audio.addEventListener("ended", handleSongEnded);
    return () => audio.removeEventListener("ended", handleSongEnded);
  }, []);

  useEffect(() => {
    dispatch(setCurrentSong(currentSongPlayingIndex));
  }, [currentSongPlayingIndex, dispatch]);

  return (
    <>
      {/* audio tag */}
      <audio
        className="hidden"
        ref={audioRef}
        src={songs[currentSong]?.songUrl?.url}
        controls
        controlsList="nodownload"
        loop={isRepeat}
        muted={isMute}
        autoPlay={autoPlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetaData}
      />

      <div className="h-28 fixed bottom-0 left-0 right-0 bg-bgDark text-white shadow-lg px-4 py-3 flex items-center justify-center sm:justify-between z-50">
        {/* Song Info */}
        <PlayerSongInfo />

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-1 w-1/3">
          {/* Control buttons */}
          <PlayerControlsButtons
            handleNext={handleNext}
            handlePlay={handlePlay}
            handlePrev={handlePrev}
          />

          {/* Progress bar */}
          <MusicPlayerProgressBar
            progress={progress}
            currentSongTotalDuration={currentSongTotalDuration}
            handleSeekTime={handleSeekTime}
          />
        </div>

        {/* Volume */}
        <PlayerVolume handleVolumeChange={handleVolumeChange} />
      </div>
    </>
  );
};

export default MusicPlayer;
