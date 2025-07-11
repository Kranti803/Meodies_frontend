import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <main className="flex bg-[#181818] text-white ">
      <section className="w-2/5">
        <Sidebar />
      </section>
      <aside className=" flex-auto ml-4">
        <Outlet />
      </aside>
    </main>
  );
};

export default MainLayout;
