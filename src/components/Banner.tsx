import BannerImg from "../assets/banner4.png";

const Banner = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md font-primary">
      <img
        src={BannerImg}
        alt="Banner"
        className="absolute object-cover w-full h-full"
      />

      <div className="absolute inset-0 text-sm grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-6 px-6 md:px-16 space-y-6 z-10 pt-8 lg:pt-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            All the <span className="text-primary">Best Songs</span>
            <br /> in One Place
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed lg:block hidden">
            On our website, you can access an amazing collection of popular and
            new songs. Stream your favorite tracks in high quality and enjoy
            without interruptions. Whatever your taste in music, we have it all
            for you!
          </p>

          <div className="flex gap-4 pt-10 lg:pt-0">
            <button
              aria-label="Discover music now"
              className="bg-primary text-white px-4 py-2 rounded-md font-semibold cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"
            >
              Discover Now
            </button>
            <button
              aria-label="Create a playlist"
              className="border-2 border-primary text-primary px-4 py-2 rounded-md font-semibold cursor-pointer"
            >
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
