import { setCurrentSong } from "../features/songs/songSlice";
import type { Isong } from "../interfaces/songInterface";
import { useAppDispatch } from "../store/hooks";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import SelectPlaylistModal from "./SelectPlaylistModal";

const SongCard = ({
  song,
  idx,
  isPlaylistPage,
}: {
  song: Isong;
  idx: number;
  isPlaylistPage?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => dispatch(setCurrentSong(song))}
        className="font-primary grid grid-cols-[1fr_1fr_auto_auto] gap-x-2 py-4 px-2 my-2 hover:bg-bgDark rounded-lg transition cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="text-gray-400 w-6 text-sm">{idx + 1}</span>
          <img
            src={song?.image?.url}
            alt="Track"
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">{song?.title}</h3>
            <p className="text-xs text-gray-400 truncate">
              {song?.artists.join(", ")}
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between gap-8 text-sm text-gray-400">
          <span>{song?.album}</span>
          <span>
            {new Date(Math.trunc(song?.duration) * 1000)
              .toISOString()
              .substring(14, 19)}
          </span>
        </div>

        <button
          className="justify-self-end cursor-pointer px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={19} color="#ec4f1b" />
        </button>
        {!isPlaylistPage && (
          <button
            className="justify-self-end cursor-pointer px-2"
            onClick={(e) => {
              e.stopPropagation(); // prevent song play (this shows the example of event bubbling and it is stopped by e.stopPropagation())
              setOpenModal(true);
            }}
          >
            <Plus size={19} color="#ec4f1b" />
          </button>
        )}
      </div>

      {openModal && (
        <SelectPlaylistModal
          songId={song?._id!}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default SongCard;
