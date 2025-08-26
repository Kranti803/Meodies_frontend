import SongCard from "../components/SongCard";
import { useGetAllFavouriteSongsQuery } from "../services/songApi";

const FavouriteSongs = () => {
  const { data } = useGetAllFavouriteSongsQuery();

  return (
    <div className="min-h-screen bg-secondary text-white px-6 py-8 font-primary">
      <h1 className="text-4xl font-bold mb-8">Favourite Songs</h1>
      {data && data?.likedSongs?.length > 0 ? (
        <section>
          <div className="divide-y divide-gray-700">
            {data?.likedSongs?.length ? (
              data?.likedSongs.map((song, idx) => (
                <SongCard song={song} idx={idx}key={idx} />
              ))
            ) : (
              <p>No songs Found</p>
            )}
          </div>
        </section>
      ) : (
        <p>No liked songs right now !</p>
      )}
    </div>
  );
};

export default FavouriteSongs;
