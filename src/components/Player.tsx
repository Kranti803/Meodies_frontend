import {
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
} from "lucide-react";
import song1 from "../assets/song1.png";

const MusicPlayer = () => {
  return (
    <>
      {/* audio tag */}
      <audio
        src="/audio/test.mp3" // change this to your audio URL or file
        controls
      />
      <div className="h-28 fixed bottom-0 left-0 right-0 bg-[#1f1f1f] text-white shadow-lg px-4 py-3 flex items-center justify-center sm:justify-between z-50">
        {/* Song Info */}
        <div className="hidden sm:flex items-center gap-3 w-1/3 ">
          <img
            src={song1}
            alt="Cover"
            className="w-12 h-12 object-cover rounded-md md:block hidden"
          />
          <div>
            <h4 className="text-sm font-semibold truncate">Sorfcore</h4>
            <p className="text-xs text-gray-400">The Neighbourhood</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-1 w-1/3">
          <div className="flex items-center gap-8 sm:gap-4">
            {/* Shuffle */}
            <button
              className="
             text-[#62d962]hover:text-[#62d962]"
            >
              <Shuffle size={18} />
            </button>

            <button className="hover:text-[#62d962]">
              <SkipBack size={20} />
            </button>

            <button className="bg-[#62d962] text-white p-2 rounded-full hover:scale-105 transition">
              <Pause size={20} />
            </button>

            <button className="hover:text-[#62d962]">
              <SkipForward size={20} />
            </button>

            {/* Repeat */}
            <button className="text-[#62d962]hover:text-[#62d962]">
              <Repeat size={18} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 w-full text-xs text-gray-400 mt-2">
            <span>0:00</span>
            <div className="md:w-full w-5xl h-1 bg-gray-700 rounded-full">
              <div className="h-1 bg-[#62d962] w-1/3 rounded-full" />
            </div>
            <span>3:26</span>
          </div>
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-2 w-1/3 justify-end">
          <Volume2 size={18} />
          <input
            type="range"
            min="0"
            max="100"
            className="w-24 h-1 accent-[#62d962] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
