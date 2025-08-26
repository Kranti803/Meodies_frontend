import { Menu } from "lucide-react";
import { useSidebar } from "../context/sideBarContext";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import { useAppSelector } from "../store/hooks";
import UserProfile from "./UserProfile";
import SearchInput from "./SearchInput";
const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const { user } = useAppSelector((state) => state.auth);
  return (
    <section className=" h-10 px-1 sm:px-4 flex justify-between items-center ">
      <button
        onClick={toggleSidebar}
        className="text-primary cursor-pointer lg:hidden"
      >
        <Menu />
      </button>
      <SearchInput />
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
