import { useState } from "react";
import { useCreatePlaylistMutation } from "../services/playlistApi";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router";

const CreatePlaylist = () => {
  const [playlistFormData, setPlaylistFormData] = useState({
    playlistName: "",
    description: "",
  });

  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createPlaylist(playlistFormData).unwrap();
      toast.success(result?.message || "Playlist created!");
      setPlaylistFormData({ playlistName: "", description: "" });
      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create playlist");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold my-6  px-2 md:px-6 text-primary">
        Create Playlist
      </h2>

      <div className="font-primary min-h-screen bg-inherit text-white px-4 py-8 flex flex-col items-center">
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Playlist Name</label>
            <input
              type="text"
              placeholder="My Vibes 🎵"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={playlistFormData.playlistName}
              onChange={(e) =>
                setPlaylistFormData({
                  ...playlistFormData,
                  playlistName: e.target.value,
                })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description (optional)</label>
            <textarea
              rows={3}
              placeholder="Chill tracks for late-night coding..."
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              value={playlistFormData.description}
              onChange={(e) =>
                setPlaylistFormData({
                  ...playlistFormData,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-md border border-gray-500 text-gray-300 hover:bg-[#2c2c2c]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 rounded-md bg-primary text-white font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Spinner /> : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePlaylist;
