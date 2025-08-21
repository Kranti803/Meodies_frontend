import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";

interface ProgressBarProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const MusicPlayerProgressBar = ({ audioRef }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const { currentSongTotalDuration } = useAppSelector((state) => state.song);

  const handleSeekTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setProgress(Number(e.target.value)); // update UI immediately
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress(audio.currentTime);

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, [audioRef]);

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
