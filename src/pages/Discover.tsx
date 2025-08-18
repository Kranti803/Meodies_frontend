import SongCard from "../components/SongCard";
import { useGetAllSongsQuery } from "../services/songApi";
import AllArtists from "./AllArtists";

const Discover = () => {
  const { data } = useGetAllSongsQuery();
  const songs = data?.songs || [];

  return (
    <div className="min-h-screen bg-[#181818] text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Discover</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Songs</h2>
        <div className="divide-y divide-gray-700">
          {songs?.map((song, idx) => (
            <SongCard song={song} key={idx} idx={idx}/>
          ))}
        </div>
      </section>

      <AllArtists />
    </div>
  );
};

export default Discover;
