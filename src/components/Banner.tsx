import BannerImg from "../assets/banner.png";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
      <div className="absolute z-10 w-full">
        <Navbar />
      </div>
      <img src={BannerImg} alt="Banner" className="absolute w-full h-full" />

      <div className="absolute inset-0 backdrop-blur-[1px] text-sm grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-6 px-6 md:px-16 space-y-6  z-10 pt-8 lg:pt-0">
          <h1 className=" text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            All the <span className="text-[#62d962]">Best Songs</span>
            <br /> in One Place
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed hidden lg:block">
            On our website, you can access an amazing collection of popular and
            new songs. Stream your favorite tracks in high quality and enjoy
            without interruptions. Whatever your taste in music, we have it all
            for you!
          </p>

          <div className="flex gap-4 pt-10 lg:pt-0">
            <button className="bg-[#62d962] text-white px-4 py-2 rounded-md font-semibold cursor-pointer hover:scale-90 transition-all ease-in-out  ">
              Discover Now
            </button>
            <button className="border border-[#62d962] text-[#62d962] px-4 py-2 rounded-md font-semibold hover:scale-90 transition-all ease-in-out">
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
