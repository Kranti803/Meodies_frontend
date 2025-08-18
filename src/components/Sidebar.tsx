import { LogOut, X, LayoutDashboard } from "lucide-react";
import { sideBarItems } from "../constants";
import { useSidebar } from "../context/sideBarContext";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import { Link, NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useLogoutUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { removeUser } from "../features/auth/authSlice";

const Sidebar = () => {
  const { closeSidebar } = useSidebar();
  const { user } = useAppSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
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
    <div className="h-full pb-32 bg-secondary text-white lg:border-r-2 lg:border-primary lg:drop-shadow-[1px_0_8px_#ec4f1b] flex flex-col gap-6 p-8 justify-left overflow-y-auto scrollbar-hide">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold font-primary text-primary">Melodies</h1>
        <button
          onClick={closeSidebar}
          className="text-primary cursor-pointer lg:hidden"
        >
          <X size={28} />
        </button>
      </div>

      {sideBarItems.map((section, index) => {
        return (
          <div key={index} className="flex flex-col gap-y-2 font-primary">
            <p className="text-sm text-primary">{section.title}</p>
            {section.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  to={item?.link}
                  key={index}
                  className={({ isActive }) =>
                    `flex items-center gap-x-2 w-4/5 text-sm py-2 ${
                      isActive && "bg-primary"
                    }  py-1 px-2 rounded-[8px] cursor-pointer hover:bg-primary`
                  }
                >
                  <Icon size={16} /> {item.name}
                </NavLink>
              );
            })}
          </div>
        );
      })}

      <div className="flex flex-col font-primary">
        <p className="text-sm text-primary">General</p>
        <aside className="flex flex-col py-2 gap-y-2">
          {user && user.role === "admin" && (
            <Link
              to={"/admin/dashboard"}
              className="flex items-center text-sm gap-x-2 cursor-pointer rounded-[8px] px-2 py-2 hover:bg-primary"
            >
              <LayoutDashboard size={16} /> Dashboard
            </Link>
          )}

          <button
            className="flex items-center text-sm gap-x-2 cursor-pointer rounded-[8px] px-2 py-2 hover:bg-primary"
            onClick={handleLogout}
          >
            <LogOut size={16} /> Logout
          </button>
        </aside>
      </div>

      <NavLinks className="lg:hidden font-primary flex flex-col gap-y-6 py-4 text-primary pl-2" />
      {!user && (
        <AuthButtons className="flex flex-col gap-y-4 w-[70%] md:hidden pl-2 mb-24 lg:mb-0" />
      )}
    </div>
  );
};

export default Sidebar;
