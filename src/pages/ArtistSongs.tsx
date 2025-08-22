import { useParams } from "react-router";
import { useGetArtistSongQuery } from "../services/songApi";
import SongCard from "../components/SongCard";

const ArtistSongs = () => {
  const { artistName, artistId } = useParams();
  const { data } = useGetArtistSongQuery(artistId!);
  console.log(data)

  return (
    <div className="min-h-screen bg-secondary text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">{artistName} Songs</h1>

      <section>
        <div className="divide-y divide-gray-700">
          {data?.songs?.length ? (
            data?.songs.map((song, idx) => <SongCard song={song} idx={idx} />)
          ) : (
            <p>No songs Found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArtistSongs;
