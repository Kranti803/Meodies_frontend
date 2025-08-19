import { X, Home, Users, Music2, LogOut, BarChart3 } from "lucide-react";
import { Link } from "react-router";
import { dashboardSideBarItems } from "../constants";

const DashboardSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  setActiveMenu,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <aside
      className={`w-64 bg-bgDark p-6 fixed h-screen opacity-0 md:opacity-100 md:-translate-x-[0%] ${
        sidebarOpen
          ? "-translate-x-[0%] opacity-100 shadow-primary shadow-2xl"
          : "-translate-x-[100%] opacity-0"
      } transform transition-all duration-400`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-8 flex items-center justify-between">
            Admin Panel{" "}
            <span
              onClick={() => setSidebarOpen(false)}
              className="block md:hidden"
            >
              <X />
            </span>
          </h2>
          <ul className="space-y-6 text-gray-300">
            {dashboardSideBarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li 
                onClick={()=>setActiveMenu(item.title)}
                className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <Icon size={18} /> {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          to={"/"}
          className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-md cursor-pointer"
        >
          <LogOut size={18} /> Home
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
