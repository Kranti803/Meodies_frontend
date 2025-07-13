import { Link } from "react-router";
const CreatePlaylist = () => {

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-[#1f1f1f] text-white rounded-2xl shadow-lg w-full max-w-md p-6 space-y-6 animate-fade-in">
        {/* Modal Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#62d962]">Create Playlist</h2>
          <button className="text-gray-400 hover:text-white text-xl">
            &times;
          </button>
        </div>

        {/* Playlist Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Playlist Name</label>
            <input
              type="text"
              placeholder="My Vibes 🎵"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description (optional)</label>
            <textarea
              rows={3}
              placeholder="Chill tracks for late-night coding..."
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Link to={'/'}
              type="button"
              className="px-4 py-2 rounded-md border border-gray-500 text-gray-300 hover:bg-[#2c2c2c]"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-[#62d962] text-black font-semibold cursor-pointer"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylist;
