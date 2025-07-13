import { ChevronLeft, ChevronRight } from "lucide-react";
import songImg2 from "../assets/songImg2.png";
const songs = [
  {
    title: "Whatever It Takes",
    artist: "Imagine Dragons",
    image: "/images/whatever_it_takes.jpg",
  },
  {
    title: "Skyfall",
    artist: "Adele",
    image: "/images/skyfall.jpg",
  },
  {
    title: "Superman",
    artist: "Eminem",
    image: "/images/superman.jpg",
  },
  {
    title: "Softcore",
    artist: "The Neighbourhood",
    image: "/images/softcore.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
  {
    title: "The Lonliest",
    artist: "Måneskin",
    image: "/images/the_lonliest.jpg",
  },
];

export default function WeeklyTopSongs() {
  return (
    <div className="bg-transparent group text-white py-6 group relative scrollbar-hide">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">
          Weekly Top <span className="text-[#62d962]">Songs</span>
        </h2>
        <button className="text-sm font-semibold outline-none border-none bg-transparent cursor-pointer mb-4">
          View all
        </button>
      </div>

      <div className="relative w-full">
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide pb-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 hover:bg-[#1f1f1f] p-2 rounded-lg"
            >
              <img
                src={songImg2}
                alt={song.title}
                className="w-full h-40 object-cover rounded block"
              />
              <p className="mt-2 font-semibold truncate">{song.title}</p>
              <p className="text-sm text-gray-400 truncate">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden group-hover:md:flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 pointer-events-none">
        <button className="rounded-full p-2 bg-[#222222] pointer-events-auto">
          <ChevronLeft />
        </button>
        <button className="rounded-full p-2 bg-[#222222] pointer-events-auto">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
