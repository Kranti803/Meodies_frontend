import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setIsPlaying,
  setAutoPlay,
  setCurrentSong,
  setVolume,
  setCurrentSongTotalDuration,
  setCurrentSongPlayingIndex,
} from "../features/songs/songSlice";
import MusicPlayerProgressBar from "./MusicPlayerProgressBar";
import PlayerVolume from "./PlayerVolume";
import PlayerControlsButtons from "./PlayerControlsButtons";
import PlayerSongInfo from "./PlayerSongInfo";

const MusicPlayer = () => {
  const { currentSongPlayingIndex } = useAppSelector((state) => state.song);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { songs, isPlaying, isRepeat, isMute, autoPlay, currentSong } =
    useAppSelector((state) => state.song);

  const dispatch = useAppDispatch();

  const handlePlay = useCallback(() => {
    if (!isPlaying) {
      dispatch(setIsPlaying(true));
      audioRef?.current?.play();
    } else {
      dispatch(setIsPlaying(false));
      audioRef?.current?.pause();
    }
  }, [isPlaying, dispatch]);

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = Number(e.target.value);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
        dispatch(setVolume(newVolume));
      }
    },
    [dispatch]
  );

  const handleNext = useCallback(() => {
    if (currentSongPlayingIndex < songs.length - 1) {
      dispatch(setIsPlaying(true));
      dispatch(setCurrentSongPlayingIndex(currentSongPlayingIndex + 1));
      dispatch(setAutoPlay(true));
    }
  }, [currentSongPlayingIndex, songs, dispatch]);

  const handlePrev = useCallback(() => {
    if (currentSongPlayingIndex === 0) {
      // restart if at first song
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      dispatch(setIsPlaying(true));
      return;
    }

    dispatch(setCurrentSongPlayingIndex(currentSongPlayingIndex - 1));
    dispatch(setIsPlaying(true));
    dispatch(setAutoPlay(true));
  }, [currentSongPlayingIndex, dispatch]);

  const handleSuffle = useCallback(() => {
    const randomSongIndex = Math.floor(Math.random() * songs.length);
    dispatch(setCurrentSongPlayingIndex(randomSongIndex));
    dispatch(setIsPlaying(true));
    dispatch(setAutoPlay(true));
  }, [dispatch, songs]);

  const handleLoadedMetaData = () => {
    if (audioRef.current) {
      dispatch(setCurrentSongTotalDuration(audioRef.current.duration));
      dispatch(setVolume(audioRef.current.volume));
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleSongEnded = () => {
      dispatch(setIsPlaying(false));
    };
    audio.addEventListener("ended", handleSongEnded);
    return () => audio.removeEventListener("ended", handleSongEnded);
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentSong(songs[currentSongPlayingIndex]));
  }, [currentSongPlayingIndex, songs, dispatch]);

  return (
    <>
      <audio
        className="hidden"
        ref={audioRef}
        src={currentSong?.songUrl.url}
        controls
        controlsList="nodownload"
        loop={isRepeat}
        muted={isMute}
        autoPlay={autoPlay}
        onLoadedMetadata={handleLoadedMetaData}
      />
      <div className="h-28 fixed bottom-0 left-0 right-0 bg-bgDark text-white shadow-lg px-4 py-3 flex items-center justify-center sm:justify-between z-50">
        <PlayerSongInfo />
        <div className="flex flex-col items-center gap-1 w-1/3">
          <PlayerControlsButtons
            handleNext={handleNext}
            handlePlay={handlePlay}
            handlePrev={handlePrev}
            handleSuffle={handleSuffle}
          />
          <MusicPlayerProgressBar
            audioRef={audioRef}
            currentSong={currentSong}
          />
        </div>
        <PlayerVolume handleVolumeChange={handleVolumeChange} />
      </div>
    </>
  );
};

export default MusicPlayer;
