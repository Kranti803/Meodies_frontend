import { Link } from "react-router";
import { useGetAllArtistsQuery } from "../services/songApi";
import { Play } from "lucide-react";

const AllArtists = () => {
  const { data } = useGetAllArtistsQuery();

  return (
     <section>
        <h2 className="text-2xl font-semibold mb-4">All Artists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data?.artists?.map((artist, idx) => (
            <Link to ={`/artist/${artist?.name}/${artist?._id}`}
              key={idx}
              className="bg-bgDark rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={artist?.image?.url}
                alt="Artist"
                className="w-24 h-24 rounded-full object-cover mb-3"
              />
              <h3 className="text-sm font-semibold text-center">
                {artist?.name}
              </h3>
              <button className="mt-3 bg-primary text-white rounded-full p-2 cursor-pointer hover:scale-105 transition">
                <Play size={16} />
              </button>
            </Link>
          ))}
        </div>
      </section>
  )
}

export default AllArtists;