import Spinner from "../components/Spinner";
import { useGetAllPlaylistSongsQuery } from "../services/playlistApi";
import { useParams } from "react-router";
import DefaultCoverImg from "../assets/SongCoverImage.webp";
import SongCard from "../components/SongCard";

const PlaylistDetails = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const { data, isLoading, error } = useGetAllPlaylistSongsQuery(playlistId!);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error || !data?.playlistWithSongs) {
    return <div className="text-center mt-10">Playlist not found.</div>;
  }

  const { playlistWithSongs } = data;
  const coverImage = playlistWithSongs.songs?.[0]?.image?.url ?? DefaultCoverImg;

  return (
    <div className="flex flex-col">
      {/* ======= Banner Section ======= */}
      <div className=" rounded-lg flex flex-col md:flex-row items-center md:items-end bg-bgDark font-primary text-white p-6 gap-6">
        {/* Cover Image */}
        <img
          src={coverImage}
          alt={playlistWithSongs.playlistName}
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />

        {/* Playlist Info */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{playlistWithSongs.playlistName}</h1>
          <p className="text-gray-300">{playlistWithSongs.description}</p>
          <p className="text-sm text-gray-400">
            {playlistWithSongs.songs?.length}{" "}
            {playlistWithSongs.songs?.length === 1 ? "song" : "songs"}
          </p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Songs</h2>
        <ul className="space-y-3">
          {playlistWithSongs?.songs?.map((song: any, idx: number) => (
            <SongCard song={song} idx={idx} isPlaylistPage={true}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlaylistDetails;
