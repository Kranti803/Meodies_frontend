import { MoreVertical, Play } from "lucide-react";
import Song1 from '../assets/song1.png'

const Playlist = () => {
  return (
    <div className="min-h-screen bg-[#181818] text-white px-6 py-8">
      {/* Playlist Header */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-10">
        <img
          src={Song1}
          alt="Playlist Cover"
          className="w-40 h-40 md:w-56 md:h-56 rounded-xl shadow-lg object-cover"
        />
        <div>
          <p className="uppercase text-sm text-gray-400">Playlist</p>
          <h1 className="text-4xl font-bold mt-1 mb-2">Chill Coding Mix</h1>
          <p className="text-sm text-gray-300">
            Created by <span className="text-[#62d962]">Admin</span> • 42 Songs • 2 hr 34 min
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-[#62d962] text-black rounded-full p-4 hover:scale-105 transition">
          <Play size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <MoreVertical />
        </button>
      </div>

      {/* Song List */}
      <div className="divide-y divide-gray-700">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-4 px-2 my-2 hover:bg-[#2a2a2a] rounded-lg transition"
          >
            {/* Song Info */}
            <div className="flex items-center gap-4 w-1/2">
              <span className="text-gray-400 w-6 text-sm">{i + 1}</span>
              <img
                src={Song1}
                alt="Track"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Sorfcore</h3>
                <p className="text-xs text-gray-400">The Neighbourhood</p>
              </div>
            </div>

            {/* Album + Duration */}
            <div className="hidden md:flex items-center justify-between gap-8 w-1/2 text-sm text-gray-400">
              <span className="truncate">Hard to Imagine The Neighbourhood</span>
              <span>3:26</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
