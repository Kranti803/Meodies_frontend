import { Trash } from "lucide-react";
import { useAppSelector } from "../store/hooks";
import { useDeleteSongMutation } from "../services/adminApi";
import { toast } from "react-toastify";
import { useGetAllSongsQuery } from "../services/songApi";

const GetAllSongs = () => {
  const { songs } = useAppSelector((state) => state.song);
  const [deleteSong, { isLoading }] = useDeleteSongMutation();
  const { refetch } = useGetAllSongsQuery();

  const handleDeleteSong = async (id: string) => {
    try {
      const result = await deleteSong({ songId: id }).unwrap();
      refetch();
      toast.success(result.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-inherit text-white p-2 md:p-8 font-primary">
      <h1 className="text-3xl font-bold text-primary mb-6 font-primary">
        All Songs
      </h1>

      <div className="overflow-x-auto rounded-xl shadow bg-[#2a2a2a] p-6">
        <table className="w-full table-auto border-collapse border border-gray-700">
          <thead>
            <tr className="bg-[#1f1f1f] text-gray-400">
              <th className="border border-gray-700 px-4 py-2 text-left">
                Title
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Artist
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Duration
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song._id} className="odd:bg-[#323232] even:bg-[#2a2a2a]">
                <td className="border border-gray-700 px-4 py-2">
                  {song.title}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {song.artists.join(",")}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {new Date(Math.trunc(song?.duration) * 1000)
                    .toISOString()
                    .substring(14, 19)}
                </td>
                <td className="border border-gray-700 px-4 py-2 space-x-2">
                  <button
                    disabled={isLoading}
                    onClick={() => handleDeleteSong(song._id!)}
                    className="bg-red-600 p-2 rounded hover:bg-red-700 transition"
                    title="Delete Song"
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllSongs;
