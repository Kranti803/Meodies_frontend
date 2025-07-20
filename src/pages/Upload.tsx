import { useState } from "react";

const UploadSong = () => {
  const [songFile, setSongFile] = useState<File | null>(null);
  const [artistName, setArtistName] = useState("");
  const [artistImage, setArtistImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (songFile) formData.append("song", songFile);
    if (artistImage) formData.append("artistImage", artistImage);
    formData.append("artistName", artistName);

    // send to backend using fetch or axios
    // fetch("/api/upload-song", { method: "POST", body: formData });
    console.log("Submitted:", { songFile, artistName, artistImage });
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white p-10">
      <h1 className="text-3xl font-bold text-[#62d962] mb-8">
        Upload New Song
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-6"
        encType="multipart/form-data"
      >
        <div>
          <label className="block mb-2 text-sm">Select Song File (MP3)</label>
          <input
            type="file"
            accept=".mp3"
            onChange={(e) => setSongFile(e.target.files?.[0] || null)}
            required
            className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-600 rounded"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Artist Name</label>
          <input
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            placeholder="e.g. The Weeknd"
            required
            className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-600 rounded"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Artist Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setArtistImage(e.target.files?.[0] || null)}
            required
            className="w-full px-4 py-2 bg-[#1f1f1f] border border-gray-600 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#62d962] text-black font-semibold rounded hover:bg-green-500 transition"
        >
          Upload Song
        </button>
      </form>
    </div>
  );
};

export default UploadSong;
