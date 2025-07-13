import Song2 from "../assets/sng1.jpg";
import Navbar from "../components/Navbar";

const mockPlaylists = [
  {
    id: 1,
    title: "Chill Vibes",
    creator: "Admin",
    cover: "https://i.scdn.co/image/ab67706f000000028bbf9fe1d6c04d4f949f4a4d",
    totalSongs: 24,
  },
  {
    id: 2,
    title: "Focus Flow",
    creator: "Kranti",
    cover: "https://i.scdn.co/image/ab67616d0000b2731c865d0062b4e5f49f7c3e15",
    totalSongs: 32,
  },
  {
    id: 3,
    title: "Code & LoFi",
    creator: "OpenAI",
    cover: "https://i.scdn.co/image/ab67706f00000002b3d04d253f0701f84fa6c41a",
    totalSongs: 18,
  },
  {
    id: 4,
    title: "Code & LoFi",
    creator: "OpenAI",
    cover: "https://i.scdn.co/image/ab67706f00000002b3d04d253f0701f84fa6c41a",
    totalSongs: 18,
  },
  {
    id: 5,
    title: "Code & LoFi",
    creator: "OpenAI",
    cover: "https://i.scdn.co/image/ab67706f00000002b3d04d253f0701f84fa6c41a",
    totalSongs: 18,
  },
  {
    id: 6,
    title: "Code & LoFi",
    creator: "OpenAI",
    cover: "https://i.scdn.co/image/ab67706f00000002b3d04d253f0701f84fa6c41a",
    totalSongs: 18,
  },
  {
    id: 7,
    title: "Code & LoFi",
    creator: "OpenAI",
    cover: "https://i.scdn.co/image/ab67706f00000002b3d04d253f0701f84fa6c41a",
    totalSongs: 18,
  },
];

const AllPlaylists = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#181818] text-white px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Playlists</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockPlaylists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-[#1f1f1f] rounded-xl p-4 cursor-pointer hover:bg-[#2a2a2a] transition shadow-md"
          >
            <img
              src={Song2}
              alt={playlist.title}
              className="w-full h-48 object-center object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-1 truncate">
              {playlist.title}
            </h3>
            <p className="text-sm text-gray-400">{playlist.totalSongs} songs</p>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default AllPlaylists;
