import Navbar from "../components/Navbar";
import { useGetAllPlaylistUserQuery } from "../services/playlistApi";
import Spinner from "../components/Spinner";
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router";

const AllPlaylists = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading, error } = useGetAllPlaylistUserQuery(user?._id!);
  const playlists = data?.playlists;
  console.log(playlists);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <Spinner />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen text-red-500">
          Failed to load playlists
        </div>
      </>
    );
  }

  if (!playlists?.length) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen text-gray-400 font-primary">
          No playlists available
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent text-white px-6 py-8 font-primary">
        <h1 className="text-3xl font-bold mb-6">Your Playlists</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlists.map((playlist) => {
            // Using the first song's image as playlist cover
            const coverImage = playlist.songs?.[0]?.image?.url;
            const playlistId = playlist?._id;

            return (
              <Link
                to={`/playlist/${playlistId}/details`}
                key={playlist._id}
                className="bg-bgDark rounded-xl p-4 cursor-pointer hover:bg-bgDark transition shadow-md"
              >
                <img
                  src={coverImage}
                  alt={playlist.playlistName}
                  className="w-full h-48 object-center object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-1 truncate">
                  {playlist.playlistName}
                </h3>
                <p className="text-sm text-gray-400">
                  {playlist.songs?.length || 0}{" "}
                  {playlist.songs?.length === 1 ? "song" : "songs"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllPlaylists;
