import { Trash } from "lucide-react";
import { useGetAllArtistsQuery } from "../services/songApi";
import { useDeleteArtistMutation } from "../services/adminApi";
import { toast } from "react-toastify";

const GetAllArtists = () => {
  const { data, refetch } = useGetAllArtistsQuery();
  const [deleteArtist, { isLoading }] = useDeleteArtistMutation();

  const handleDeleteArtist = async (id: string) => {
    try {
      const result = await deleteArtist({ artistId: id }).unwrap();
      refetch();
      toast.success(result?.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-secondary text-white p-8">
      <h1 className="text-3xl font-bold text-primary mb-6">All Artists</h1>

      <div className="overflow-x-auto rounded-xl shadow bg-bgDark p-6">
        <table className="w-full table-auto border-collapse border border-gray-700">
          <thead>
            <tr className="bg-[#1f1f1f] text-gray-400">
              <th className="border border-gray-700 px-4 py-2 text-left">
                Image
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.artists?.map((artist) => (
              <tr
                key={artist._id}
                className="odd:bg-[#323232] even:bg-[#2a2a2a]"
              >
                <td className="border border-gray-700 px-4 py-2">
                  <img
                    src={artist?.image?.url}
                    alt={artist.name}
                    className="w-18 rounded-lg h-18 object-cover"
                  />
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {artist.name}
                </td>
                <td className="border border-gray-700 px-4 py-2 space-x-2">
                  <button
                    disabled={isLoading}
                    onClick={() => handleDeleteArtist(artist._id!)}
                    className="bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition"
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

export default GetAllArtists;
