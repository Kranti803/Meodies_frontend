import { Menu, Search } from "lucide-react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <section className=" h-18 flex justify-between items-center">
      <div className="md:hidden">
        <Menu />
      </div>
      <div className=" w-full flex justify-between items-center px-8">
        <div className="bg-[#1F1F1F] flex gap-x-2 py-1 px-3 rounded-md">
          <button>
            <Search size={18} />
          </button>
          <div>
            <input type="text" placeholder="Search for songs..." className="border-none outline-none" />
          </div>
        </div>
        <div className="flex gap-x-8">
          <Link to="/" className="hover:text-[#EE10B0]">About Us</Link>
          <Link to="/" className="hover:text-[#EE10B0]">Contact</Link>
        </div>
        <div className="flex gap-x-2">
          <button className="border-1 border-[#FF10B0] py-1 px-6 rounded-md font-thin text-[#FF10B0] hover:drop-shadow-[1px_0_8px_#EE10B0] hover:scale-90 cursor-pointer transition-all ease-in-out">Login</button>
          <button className="border-none outline-none font-thin bg-[#FF10B0] py-1 px-6 rounded-md cursor-pointer hover:scale-95 transition-all ease-in-out">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
