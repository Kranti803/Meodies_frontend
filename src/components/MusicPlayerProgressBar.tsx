import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import type { Isong } from "../interfaces/songInterface";
import { useUpdateRecentlyPlayedSongsMutation } from "../services/songApi";

interface ProgressBarProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentSong: Isong | null;
}

const MusicPlayerProgressBar = ({
  audioRef,
  currentSong,
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const { currentSongTotalDuration } = useAppSelector((state) => state.song);
  const [updateRecentlyPlayedSongs] = useUpdateRecentlyPlayedSongsMutation();
  const { user } = useAppSelector((state) => state.auth);

  const handleSeekTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setProgress(Number(e.target.value)); // update UI immediately
    }
  };

  const handleUpdateRecentlyPlayed = async () => {
    try {
      if (currentSong)
        await updateRecentlyPlayedSongs({
          songId: currentSong._id!,
          userId: user?._id!,
        }).unwrap();
    } catch (error: any) {
      console.log(error?.data?.message);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;

    let hasUpdated = false;

    const updateProgress = () => {
      setProgress(audio.currentTime);

      // checking halfway
      if (
        !hasUpdated &&
        audio.duration > 0 &&
        audio.currentTime >= audio.duration / 2
      ) {
        hasUpdated = true;
        console.log("Song reached halfway:", currentSong.title);
        handleUpdateRecentlyPlayed();
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, [audioRef, currentSong]);

  return (
    <div className="flex items-center justify-center gap-2 w-full text-xs text-gray-400 mt-2">
      <span>{new Date(progress * 1000).toISOString().substring(14, 19)}</span>
      <input
        type="range"
        min="0"
        max={currentSongTotalDuration}
        value={progress}
        onChange={(e) => handleSeekTime(e)}
        className="w-5xl h-1 accent-primary cursor-pointer"
      />
      <span>
        {new Date(currentSongTotalDuration * 1000)
          .toISOString()
          .substring(14, 19)}
      </span>
    </div>
  );
};

export default MusicPlayerProgressBar;
