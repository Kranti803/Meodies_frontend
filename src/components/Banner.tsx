import BannerImg from "../assets/banner.png";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-md">
      <div className="absolute z-99 w-full">
        <Navbar />
      </div>
      <img
        src={BannerImg}
        alt="Banner"
        className="absolute object-right w-full h-full"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] grid grid-cols-12 items-center">
        {/* Text Content */}
        <div className="col-span-12 md:col-span-6 px-6 md:px-16 space-y-6 z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            All the <span className="text-[#EE10B0]">Best Songs</span>
            <br /> in One Place
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
            On our website, you can access an amazing collection of popular and
            new songs. Stream your favorite tracks in high quality and enjoy
            without interruptions. Whatever your taste in music, we have it all
            for you!
          </p>

          <div className="flex gap-4">
            <button className="bg-[#EE10B0] text-white px-4 py-2 rounded-md font-semibold cursor-pointer hover:scale-90 transition-all ease-in-out  ">
              Discover Now
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white hover:scale-90 transition-all ease-in-out">
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
