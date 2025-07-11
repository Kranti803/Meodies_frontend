import { sideBarItems } from "../constants";

const Sidebar = () => {
  return (
    <div className="h-full bg-[#181818] text-white border-r-2 border-[#EE10B0] drop-shadow-[1px_0_8px_#EE10B0] flex flex-col gap-6 p-8 justify-left">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#EE10B0] via-[#8F4CCB] to-[#0E9EEF] bg-clip-text text-transparent">
          Melodies
        </h1>
      </div>
      {sideBarItems.map((section, index) => {
        return (
          <div key={index} className="flex flex-col gap-y-2">
            <p className="text-sm text-[#EE10B0]">{section.title}</p>
            {section.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <span
                  key={index}
                  className={`flex items-center gap-x-2 w-4/5 text-sm ${
                    item.name.includes("Home") && "bg-[#FF10B0]"
                  }  py-1 px-2 rounded-[8px] cursor-pointer`}
                >
                  <Icon size={16} /> {item.name}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
//
