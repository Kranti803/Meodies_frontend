import { Menu, Search } from "lucide-react";
import { useSidebar } from "../context/sideBarContext";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <section className=" h-18 px-1 sm:px-4 flex justify-between items-center ">
      <button
        onClick={toggleSidebar}
        className="text-[#62d962] cursor-pointer lg:hidden"
      >
        <Menu />
      </button>

      <div className="bg-[#1F1F1F] flex gap-x-2 py-1 px-3 rounded-md">
        <button className="text-[#62d962]">
          <Search size={18} />
        </button>
        <div>
          <input
            type="text"
            placeholder="Search for songs..."
            className="border-none outline-none"
          />
        </div>
      </div>
      <NavLinks className="hidden lg:flex lg:gap-x-8" />
      <AuthButtons className="md:flex gap-x-4 hidden" />
    </section>
  );
};

export default Navbar;
