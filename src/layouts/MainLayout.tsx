import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import "../index.css";
import { useSidebar } from "../context/sideBarContext";

const MainLayout = () => {
  const { isOpen } = useSidebar();
  return (
    <main className="flex h-screen overflow-hidden bg-[#181818] text-white">
      <section
        className={`
      fixed top-0 left-0 h-screen z-50 w-3/5 md:w-2/5 lg:w-1/5 
      transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 lg:static lg:block
      bg-[#181818]
    `}
      >
        <Sidebar />
      </section>

      {/* Main Content: Scrollable */}
      <aside className="ml-0 w-full h-screen overflow-y-scroll scrollbar-hide p-4">
        <Outlet />
      </aside>
    </main>
  );
};

export default MainLayout;

/* <aside className="flex-auto ml-4 bg-black overflow-hidden"> */
