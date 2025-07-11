import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <main className="flex ">
      <section className="bg-red-500 w-1/6">
        <Navbar />
      </section>
      <aside className="bg-black flex-auto text-teal-500">
        <Outlet />
      </aside>
    </main>
  );
};

export default MainLayout;
