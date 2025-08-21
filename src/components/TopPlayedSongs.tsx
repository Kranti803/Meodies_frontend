import { ChevronLeft, ChevronRight } from "lucide-react";
import { setCurrentSong } from "../features/songs/songSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useRef } from "react";

export default function TopPlayedSongs() {
  const {songs} = useAppSelector(state=>state.song)
  const dispatch = useAppDispatch();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // handling scroll
  const handleLeftScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 160;
    }
  };

  const handleRightScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 160;
    }
  };

  return (
    <div className="font-primary bg-transparent group text-white py-6 group relative">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">
          Top Played <span className="text-primary">Songs</span>
        </h2>
        <div className="hidden md:flex gap-x-4">
          <button
            onClick={handleLeftScroll}
            className="rounded-full p-2 bg-bgDark cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleRightScroll}
            className="rounded-full p-2 bg-[#222222] cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide pb-4 scroll-smooth"
        >
          {songs?.map((song, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 hover:bg-bgDark p-2 rounded-lg cursor-pointer"
              onClick={() => dispatch(setCurrentSong(song))}
            >
              <img
                src={song?.image?.url}
                alt={"song_image"}
                className="w-full h-40 object-cover rounded block"
              />
              <p className="mt-2 font-semibold truncate">{song.title}</p>
              <p className="text-sm text-gray-400 truncate">
                {song.artists.join(",")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
