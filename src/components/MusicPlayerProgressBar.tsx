import React from "react";

interface ProgressBarProps {
  progress: number;
  currentSongTotalDuration: number;
  handleSeekTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MusicPlayerProgressBar = ({
  progress,
  currentSongTotalDuration,
  handleSeekTime,
}: ProgressBarProps) => {
//   console.log("re-render from main player comp");

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
