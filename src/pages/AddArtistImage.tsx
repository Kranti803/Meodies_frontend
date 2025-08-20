"use client";
import { useState } from "react";

interface Artist {
  id: string;
  name: string;
}

// Mock data (replace this with API call later)
const artists: Artist[] = [
  { id: "1", name: "Arijit Singh" },
  { id: "2", name: "Taylor Swift" },
  { id: "3", name: "The Weeknd" },
];

const AddArtistImage = () => {
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArtist(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedArtist) {
      alert("Please select an artist!");
      return;
    }
    if (!image) {
      alert("Please select an image!");
      return;
    }

    // TODO: API call
    console.log("Uploading image:", image.name, "for artist:", selectedArtist);
  };

  return (
    <div className="bg-secondary p-6 rounded-xl shadow text-white font-primary">
      <h2 className="text-xl font-bold mb-4">Add Artist Image</h2>

      {/* Artist dropdown */}
      <select
        value={selectedArtist}
        onChange={handleArtistChange}
        className="w-full p-2 rounded bg-bgDark text-white mb-4"
      >
        <option value="">-- Select Artist --</option>
        {artists.map((artist) => (
          <option key={artist.id} value={artist.id}>
            {artist.name}
          </option>
        ))}
      </select>

      {/* Upload field */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 border border-gray-400 rounded-lg cursor-pointer w-full p-4"
      />

      {preview && (
        <img
          src={preview}
          alt="Artist Preview"
          className="w-32 h-32 object-cover rounded-full mb-4"
        />
      )}

      <button
        onClick={handleUpload}
        className="bg-primary px-4 py-2 rounded hover:bg-primary transition"
      >
        Upload Image
      </button>
    </div>
  );
};

export default AddArtistImage;
