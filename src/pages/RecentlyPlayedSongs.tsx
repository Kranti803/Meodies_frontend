import SongCard from "../components/SongCard";
import { useGetRecentlyPlayedSongsQuery } from "../services/songApi";

const RecentlyPlayedSongs = () => {
    const {data} = useGetRecentlyPlayedSongsQuery();
    console.log()

  return (
    <div className="min-h-screen bg-secondary text-white px-6 py-8 font-primary font-primaary">
      <h1 className="text-4xl font-bold mb-8">Recently Played Songs</h1>
      <section>
        <div className="divide-y divide-gray-700">
          {data?.songs?.length ? (
            data?.songs.map((song, idx) => <SongCard song={song} idx={idx} key={idx} />)
          ) : (
            <p>No songs Found...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default RecentlyPlayedSongs;
