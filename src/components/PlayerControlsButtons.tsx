import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setIsRepeat } from "../features/songs/songSlice";
import React from "react";

interface PlayerControlsButtons {
  handlePrev: () => void;
  handlePlay: () => void;
  handleNext: () => void;
}
const PlayerControlsButtons = ({
  handleNext,
  handlePlay,
  handlePrev,
}: PlayerControlsButtons) => {
  const dispatch = useAppDispatch();
  const { isRepeat, isPlaying } = useAppSelector((state) => state.song);
//   console.log("re-render from player component buttons");


  return (
    <div className="flex items-center gap-8 sm:gap-4">
      {/* Shuffle */}
      <button className=" hover:text-primary cursor-pointer border-none outline-none">
        <Shuffle size={18} />
      </button>

      <button
        onClick={handlePrev}
        className="hover:text-primary cursor-pointer border-none outline-none"
      >
        <SkipBack size={20} />
      </button>

      <button
        onClick={handlePlay}
        className="bg-primary text-white p-2 rounded-full transition cursor-pointer border-none outline-none"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button
        onClick={handleNext}
        className="hover:text-primary cursor-pointer border-none outline-none"
      >
        <SkipForward size={20} />
      </button>

      {/* Repeat */}
      <button
        onClick={() => dispatch(setIsRepeat(!isRepeat))}
        className="hover:text-primary cursor-pointer border-none outline-none"
      >
        {isRepeat ? (
          <Repeat size={18} className="text-primary" />
        ) : (
          <Repeat size={18} />
        )}
      </button>
    </div>
  );
};

export default React.memo(PlayerControlsButtons);
