import { useAppSelector } from "../store/hooks";
import React from "react";

const PlayerSongInfo = () => {
  const { songs, currentSong } = useAppSelector((state) => state.song);
//   console.log("re-render from player song info");

  return (
    <div className="hidden sm:flex items-center gap-3 w-1/3">
      <img
        src={songs[currentSong]?.image?.url}
        alt="Cover"
        className="w-12 h-12 object-cover rounded-md md:block hidden"
      />
      <div className="w-[calc(100%-48px)]">
        <h4 className="text-sm font-semibold">{songs[currentSong]?.title}</h4>
        <p className="text-xs text-gray-400">The Neighbourhood</p>
      </div>
    </div>
  );
};

export default React.memo(PlayerSongInfo);
