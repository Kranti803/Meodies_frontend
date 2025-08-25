import { Menu } from "lucide-react";
import { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardStats from "../components/DashboardStats";
import GetAllSongs from "./GetAllSongs";
import GetAllUsers from "./GetAllUsers";
import GetAllArtists from "./GetAllArtists";
import UploadSong from "./Upload";
import AddArtist from "./AddArtist";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const renderActiveMenu = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <DashboardStats />;
      case "Songs":
        return <GetAllSongs />;
      case "Users":
        return <GetAllUsers />;
      case "Artists":
        return <GetAllArtists />;
      case "Upload Song":
        return <UploadSong />;
      case "Add Artist":
        return <AddArtist />;
    }
  };

  return (
    <div className="min-h-screen flex bg-secondary text-white font-primary">
      {/* Sidebar */}
      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setActiveMenu={setActiveMenu} 
      />

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-x-2 border-b border-gray-400 pb-2">
          <span
            onClick={() => setSidebarOpen(true)}
            className="text-primary cursor-pointer md:hidden block"
          >
            <Menu />
          </span>
          Welcome, Admin
        </h1>

        {/* Dashboard Active Menu*/}
        {renderActiveMenu()}
      </main>
    </div>
  );
};

export default AdminDashboard;
