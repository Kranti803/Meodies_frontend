import { VolumeX, Volume2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setIsMute } from "../features/songs/songSlice";
import React from "react";

interface PlayerVolumeProps {
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const PlayerVolume = ({ handleVolumeChange }: PlayerVolumeProps) => {
  const dispatch = useAppDispatch();

  const { isMute, volume } = useAppSelector((state) => state.song);

  return (
    <div className="hidden sm:flex items-center gap-2 w-1/3 justify-end">
      <button
        className="border-none outline-none cursor-pointer"
        onClick={() => dispatch(setIsMute(!isMute))}
      >
        {isMute === true || volume === 0 ? (
          <VolumeX size={18} />
        ) : (
          <Volume2 size={18} />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => handleVolumeChange(e)}
        className="w-24 h-1 accent-primary cursor-pointer"
      />
    </div>
  );
};

export default React.memo(PlayerVolume);
