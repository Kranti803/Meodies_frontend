import { useState } from "react";
import { Trash } from "lucide-react";
import artistImg from '../assets/unnamed.png'

interface Artist {
  _id: string;
  name: string;
  genre: string;
  status: "artist" | "verified";
  image: string; // ✅ New field
}

const initialArtists: Artist[] = [
  {
    _id: "1",
    name: "Drake",
    genre: "Hip-Hop",
    status: "artist",
    image: "https://i.pravatar.cc/100?img=11", // sample image
  },
  {
    _id: "2",
    name: "Taylor Swift",
    genre: "Pop",
    status: "verified",
    image: "https://i.pravatar.cc/100?img=22",
  },
  {
    _id: "3",
    name: "Arijit Singh",
    genre: "Bollywood",
    status: "artist",
    image: "https://i.pravatar.cc/100?img=33",
  },
];

const GetAllArtists = () => {
  const [artists, setArtists] = useState<Artist[]>(initialArtists);

  const deleteArtist = (id: string) => {
    if (window.confirm("Are you sure you want to delete this artist?")) {
      setArtists(artists.filter((artist) => artist._id !== id));
      // TODO: API call to delete artist
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
            {artists.map((artist) => (
              <tr
                key={artist._id}
                className="odd:bg-[#323232] even:bg-[#2a2a2a]"
              >
                <td className="border border-gray-700 px-4 py-2">
                  <img
                    src={artistImg}
                    alt={artist.name}
                    className="w-18 rounded-lg h-18 object-cover"
                  />
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {artist.name}
                </td>
                <td className="border border-gray-700 px-4 py-2 space-x-2">
                  <button
                    onClick={() => deleteArtist(artist._id)}
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
