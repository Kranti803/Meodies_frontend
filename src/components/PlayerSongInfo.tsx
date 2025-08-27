import { useAppSelector } from "../store/hooks";
import React from "react";

const PlayerSongInfo = () => {
  const { currentSong } = useAppSelector((state) => state.song);

  return (
   <div className="flex flex-col md:flex-row items-center gap-2 md:w-1/3 w-full mx-auto pb-3 md:pb-0">
  <img
    src={currentSong?.image?.url}
    loading="lazy"
    alt="Cover"
    className="w-12 h-12 object-cover rounded-md"
  />
  <div className="text-center md:text-left">
    <h4 className="text-sm font-semibold">{currentSong?.title}</h4>
    <p className="text-xs text-gray-400">{currentSong?.artists?.join(',')}</p>
  </div>
</div>

  );
};

export default React.memo(PlayerSongInfo);
