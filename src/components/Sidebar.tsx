import { LogOut, Settings, X, LayoutDashboard } from "lucide-react";
import { sideBarItems } from "../constants";
import { useSidebar } from "../context/sideBarContext";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useLazyLogoutUserQuery } from "../services/authApi";
import { toast } from "react-toastify";
import { removeUser } from "../features/auth/authSlice";

const Sidebar = () => {
  const { closeSidebar } = useSidebar();
  const { user } = useAppSelector((state) => state.auth);
  const [logoutUser] = useLazyLogoutUserQuery();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      const result = await logoutUser().unwrap(); //returns a promise
      if (result?.message) {
        dispatch(removeUser());
        toast.success(result?.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <div className="h-full pb-32 bg-[#181818] text-white lg:border-r-2 lg:border-[#62d962] lg:drop-shadow-[1px_0_8px_#62d962] flex flex-col gap-6 p-8 justify-left overflow-y-auto scrollbar-hide">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-[#62d962]">Melodies</h1>
        <button
          onClick={closeSidebar}
          className="text-[#62d962] cursor-pointer lg:hidden"
        >
          <X size={28} />
        </button>
      </div>

      {sideBarItems.map((section, index) => {
        return (
          <div key={index} className="flex flex-col gap-y-2">
            <p className="text-sm text-[#62d962]">{section.title}</p>
            {section.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  to="/"
                  key={index}
                  className={`flex items-center gap-x-2 w-4/5 text-sm py-2 ${
                    item.name.includes("Home") && "bg-[#62d962]"
                  }  py-1 px-2 rounded-[8px] cursor-pointer`}
                >
                  <Icon size={16} /> {item.name}
                </Link>
              );
            })}
          </div>
        );
      })}

      <div className="flex flex-col">
        <p className="text-sm text-[#62d962]">General</p>
        <aside className="flex flex-col py-2 gap-y-2">
          <button className="flex items-center text-sm gap-x-2 py-2 cursor-pointer">
            <Settings size={16} /> Settings
          </button>
          {user && user.role === "admin" && (
            <Link
              to={"/admin/dashboard"}
              className="flex items-center text-sm gap-x-2 py-2 cursor-pointer"
            >
              <LayoutDashboard size={16} /> Dashboard
            </Link>
          )}

          <button
            className="flex items-center text-sm gap-x-2 py-2 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut size={16} /> Logout
          </button>
        </aside>
      </div>

      <NavLinks className="lg:hidden flex flex-col gap-y-6 py-4 text-[#62d962] pl-2" />
      {!user && (
        <AuthButtons className="flex flex-col gap-y-4 w-[70%] md:hidden pl-2 mb-24 lg:mb-0" />
      )}
    </div>
  );
};

export default Sidebar;
