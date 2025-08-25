"use client";
import { useState } from "react";
import { useAddArtistMutation } from "../services/adminApi";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const AddArtist = () => {
  const [artistName, setArtistName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [addArtist, { isLoading }] = useAddArtistMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    try {
      if (image) {
        const result = await addArtist({ name: artistName, image }).unwrap();
        toast.success(result?.message);
      } else {
        toast.error("Image is also required");
      }
    } catch (error: any) {
      toast.error(error?.data?.result?.message);
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-xl shadow text-white font-primary">
      <h2 className="text-xl font-bold mb-4">Add Artist</h2>

      <input
        type="text"
        placeholder="Enter artist name"
        value={artistName}
        onChange={(e) => setArtistName(e.target.value)}
        className="w-full p-2 rounded bg-bgDark text-white mb-4"
      />

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
        {isLoading ? <Spinner /> : "Upload Artist"}
      </button>
    </div>
  );
};

export default AddArtist;
