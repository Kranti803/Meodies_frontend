import { useGetAllSongsQuery } from "../services/songApi";
import SongCard from "./SongCard";

const TrendingSongs = () => {
  const { data } = useGetAllSongsQuery();

  const filteredSongs = data?.songs.filter((song) => song.trending === true);

  return (
    <>
      <div className="font-primary flex justify-between">
        <h2 className="text-2xl font-bold mb-4">
          Trending <span className="text-primary">Songs</span>
        </h2>
      </div>
      {filteredSongs?.map((song, idx) => (
        <SongCard song={song} idx={idx} />
      ))}
    </>
  );
};

export default TrendingSongs;
