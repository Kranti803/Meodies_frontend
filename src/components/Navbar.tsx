import { Menu, Search } from "lucide-react";
import { useSidebar } from "../context/sideBarContext";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import { useAppSelector } from "../store/hooks";
import UserProfile from "./UserProfile";
const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const { user } = useAppSelector((state) => state.auth);
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
      {!user ? (
        <AuthButtons className="md:flex gap-x-4 hidden" />
      ) : (
        <UserProfile name={user?.name} />
      )}
    </section>
  );
};

export default Navbar;
