import { Heart } from "lucide-react"; // Optional: install lucide-react for icons
import song1 from "../assets/song1.png";

const Songs = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">
          Weekly Top <span className="text-[#62d962]">Songs</span>
        </h2>
        <button className="text-sm font-semibold outline-none border-none bg-transparent cursor-pointer mb-4">
          View all
        </button>
      </div>
      {[...Array(5).keys()].map((_, index) => (
        <div
        key={index}
         className="flex items-center justify-between bg-[#1f1f1f] text-white p-3 rounded-lg w-full my-4">
          {/* Album Art + Title + Artist */}
          <div className="flex gap-x-2">
            <span className="text-xl font-bold w-12">#{index + 1}</span>
            <div className="flex items-center gap-3 w-1/3">
              <img
                src={song1}
                alt="Album"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold">Sorfcore</h3>
                <p className="text-xs text-gray-400">The Neighbourhood</p>
              </div>
            </div>
          </div>

          {/* Release Date */}
          <div className="text-sm md:block hidden text-gray-400 w-28 text-center">
            Nov 4, 2023
          </div>

          {/* Album Name */}
          <div className="text-sm sm:block hidden text-gray-200 flex-1 text-center truncate">
            Hard to Imagine the Neighbourhood Ever Changing
          </div>

          {/* Like + Duration */}
          <div className="flex items-center gap-4 text-sm w-20 justify-end">
            <Heart size={17} className="text-[#62d962]" />
            <span>3:26</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Songs;
