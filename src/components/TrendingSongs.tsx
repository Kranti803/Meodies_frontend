import { useAppSelector } from "../store/hooks";
import SongCard from "./SongCard";

const TrendingSongs = () => {
  const {songs} = useAppSelector(state=>state.song)

  const trendingSongs = songs.filter((song) => song.trending === true);
  console.log(trendingSongs)

  return (
    <>
      <div className="font-primary flex justify-between">
        <h2 className="text-2xl font-bold mb-4">
          Trending <span className="text-primary">Songs</span>
        </h2>
      </div>
      {trendingSongs?.map((song, idx) => (
        <SongCard song={song} idx={idx} key={idx} />
      ))}
    </>
  );
};

export default TrendingSongs;
