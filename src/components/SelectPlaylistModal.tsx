import type { Iplaylist } from "../interfaces/playlistInterface";
import {
  useAddToPlaylistMutation,
  useGetAllPlaylistUserQuery,
} from "../services/playlistApi";
import { useAppSelector } from "../store/hooks";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

interface SelectPlaylistModalProps {
  songId: string;
  onClose: () => void;
}

const SelectPlaylistModal = ({ songId, onClose }: SelectPlaylistModalProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useGetAllPlaylistUserQuery(user?._id!);
  const playlists = data?.playlists;
  const [addToPlaylist, { isLoading: adding }] = useAddToPlaylistMutation();

  const handleAdd = async (playlistId: string) => {
    try {
      await addToPlaylist({ playlistId, songId }).unwrap();
      toast.success("Song added to playlist!");
      onClose();
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="font-primary fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-bgDark text-white rounded-2xl shadow-lg w-full max-w-sm p-6 space-y-4 animate-fade-in">
        <h2 className="text-xl font-semibold text-primary">Add to Playlist</h2>

        {isLoading ? (
          <div className="flex justify-center py-6">
            <Spinner />
          </div>
        ) : (
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {playlists?.length ? (
              playlists.map((pl: Iplaylist) => (
                <li
                  key={pl._id}
                  className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleAdd(pl?._id!)}
                >
                  <span>{pl?.playlistName}</span>
                  {adding && <Spinner />}
                </li>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No playlists yet.</p>
            )}
          </ul>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlaylistModal;
