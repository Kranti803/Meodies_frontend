// Updated AdminDashboard.tsx
import {
  Home,
  Users,
  Music2,
  LogOut,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#181818] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1f1f1f] p-6 hidden md:flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-[#62d962] mb-8">Admin Panel</h2>
          <ul className="space-y-6 text-gray-300">
            <li className="flex items-center gap-2 hover:text-[#62d962] cursor-pointer">
              <Home size={18} /> Dashboard
            </li>
            <li className="flex items-center gap-2 hover:text-[#62d962] cursor-pointer">
              <Users size={18} /> Users
            </li>
            <li className="flex items-center gap-2 hover:text-[#62d962] cursor-pointer">
              <Music2 size={18} /> Songs
            </li>
            <li className="flex items-center gap-2 hover:text-[#62d962] cursor-pointer">
              <BarChart3 size={18} /> Analytics
            </li>
          </ul>
        </div>
        <Link to={'/'} className="flex items-center gap-2 bg-[#62d962] text-black py-2 px-4 rounded-md cursor-pointer">
          <LogOut size={18} /> Home
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, Admin 🎷</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#2a2a2a] p-5 rounded-xl shadow text-center">
            <h3 className="text-lg text-gray-400">Total Users</h3>
            <p className="text-3xl font-bold text-[#62d962]">1,024</p>
          </div>
          <div className="bg-[#2a2a2a] p-5 rounded-xl shadow text-center">
            <h3 className="text-lg text-gray-400">Songs Uploaded</h3>
            <p className="text-3xl font-bold text-[#62d962]">6,210</p>
          </div>
          <Link
            to="/admin/upload-song"
            className="bg-[#2a2a2a] p-5 rounded-xl shadow text-center hover:bg-[#323232] transition-colors"
          >
            <h3 className="text-lg text-gray-400">Upload New Song</h3>
            <p className="text-3xl font-bold text-[#62d962]">+</p>
          </Link>
        </div>

        {/* Placeholder for future components (charts, tables, etc.) */}
        <div className="bg-[#2a2a2a] rounded-xl p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-4">User Activity</h2>
          <p className="text-gray-400">Analytics and graphs will appear here.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
