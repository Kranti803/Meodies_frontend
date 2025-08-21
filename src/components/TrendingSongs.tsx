import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import SongCard from "./SongCard";
import { setTrendingSongs } from "../features/songs/songSlice";

const TrendingSongs = () => {
  const { trendingSongs } = useAppSelector((state) => state.song);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTrendingSongs());
  }, [dispatch]);

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
