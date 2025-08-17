import { Play } from "lucide-react";
import Artist1 from "../assets/arijit.webp";
import { useGetAllSongsQuery } from "../services/songApi";

const Discover = () => {
  const { data } = useGetAllSongsQuery();
  return (
    <div className="min-h-screen bg-[#181818] text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Discover</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Songs</h2>
        <div className="divide-y divide-gray-700">
          {data?.songs?.map((song, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-4 px-2 my-2 hover:bg-[#2a2a2a] rounded-lg transition"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 w-6 text-sm">{idx + 1}</span>
                <img
                  src={song?.image?.url}
                  alt="Track"
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">
                    {song?.title} {idx + 1}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">
                    {song?.artists.map((artist, idx) => (
                      <span key={idx}>{artist}</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-between gap-8 text-sm text-gray-400">
                <span className="">{song?.album}</span>
                <span>
                  {new Date(Math.trunc((song?.duration)) * 1000)
                    .toISOString()
                    .substring(14, 19)}
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">All Artists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#242424] rounded-lg p-4 flex flex-col items-center hover:bg-[#2a2a2a] transition"
            >
              <img
                src={Artist1}
                alt="Artist"
                className="w-24 h-24 rounded-full object-cover mb-3"
              />
              <h3 className="text-sm font-semibold text-center">
                Artist {i + 1}
              </h3>
              <p className="text-xs text-gray-400 text-center mt-1">12 Songs</p>
              <button className="mt-3 bg-[#62d962] text-black rounded-full p-2 hover:scale-105 transition">
                <Play size={16} />
              </button>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Discover;
