import { setcurrentSongPlayingIndex } from "../features/songs/songSlice";
import type { Isong } from "../interfaces/songInterface";
import { useAppDispatch } from "../store/hooks";

const SongCard = ({ song, idx }: { song: Isong; idx: number }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(setcurrentSongPlayingIndex(idx))}
      className="flex items-center justify-between py-4 px-2 my-2 hover:bg-[#2a2a2a] rounded-lg transition cursor-pointer"
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
          {new Date(Math.trunc(song?.duration) * 1000)
            .toISOString()
            .substring(14, 19)}
        </span>
      </div>
    </div>
  );
};

export default SongCard;
