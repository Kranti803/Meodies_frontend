import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import "../index.css";
import { useSidebar } from "../context/sideBarContext";
import MusicPlayer from "../components/Player";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const { isOpen } = useSidebar();
  return (
    <main className="flex h-screen overflow-hidden bg-secondary text-white">
      <section
        className={`
      fixed top-0 left-0 h-screen z-50 w-3/5 md:w-2/5 lg:w-1/5 
      transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0 shadow-primary shadow-2xl" : "-translate-x-full"} 
      lg:translate-x-0 lg:static lg:block
      bg-secondary`}
      >
        <Sidebar />
      </section>


      <aside className="ml-0 w-full h-screen overflow-y-scroll scrollbar-hide p-4">
        <Navbar/>
        <Outlet />
        <MusicPlayer />
      </aside>
    </main>
  );
};

export default MainLayout;


