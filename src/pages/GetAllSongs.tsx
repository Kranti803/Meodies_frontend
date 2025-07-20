import { useState } from "react";
import { Pencil, Trash } from "lucide-react";

interface Song {
  _id: string;
  title: string;
  artist: string;
  genre: string;
}

const initialSongs: Song[] = [
  { _id: "1", title: "Ocean Eyes", artist: "Billie Eilish", genre: "Pop" },
  { _id: "2", title: "Blinding Lights", artist: "The Weeknd", genre: "R&B" },
  { _id: "3", title: "Shape of You", artist: "Ed Sheeran", genre: "Pop" },
];

const SongsPage = () => {
  const [songs, setSongs] = useState<Song[]>(initialSongs);

  const deleteSong = (id: string) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      setSongs((prev) => prev.filter((song) => song._id !== id));
      // TODO: Call API to delete
    }
  };

  const updateSong = (id: string) => {
    // TODO: Navigate to song edit form or open modal
    alert(`Edit song with ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white p-8">
      <h1 className="text-3xl font-bold text-[#62d962] mb-6">All Songs</h1>

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
                  {song.artist}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {song.genre}
                </td>
                <td className="border border-gray-700 px-4 py-2 space-x-2">
                  <button
                    onClick={() => updateSong(song._id)}
                    className="bg-[#62d962] text-black p-2 rounded hover:bg-green-500 transition"
                    title="Edit Song"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => deleteSong(song._id)}
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

export default SongsPage;
