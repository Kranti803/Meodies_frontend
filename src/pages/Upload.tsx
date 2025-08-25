import { useState } from "react";
import { useUploadSongMutation } from "../services/adminApi";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const UploadSong = () => {
  const [songFile, setSongFile] = useState<File | null>(null);
  const [uploadSong, { isLoading }] = useUploadSongMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (songFile) {
        const result = await uploadSong(songFile).unwrap();
        toast.success(result?.message);
      } else {
        toast.error("Please select a song file");
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-secondary text-white p-10 font-primary">
      <h1 className="text-3xl font-bold text-primary mb-8">Upload New Song</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-bgDark p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-6"
        encType="multipart/form-data"
      >
        <div>
          <label className="block mb-2 text-sm">Select Song File (MP3)</label>
          <input
            type="file"
            accept=".mp3"
            onChange={(e) => setSongFile(e.target.files?.[0] || null)}
            required
            className="w-full px-4 py-2 bg-bgDark border border-gray-600 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full grid place-items-center py-2 px-4 bg-primary text-white text-center font-semibold rounded hover:bg-primary transition"
        >
          {isLoading ? <Spinner /> : "Upload Song"}
        </button>
      </form>
    </div>
  );
};

export default UploadSong;
