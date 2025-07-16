import { Facebook, Instagram, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent mt-4 pb-28 bottom-0 text-white py-8 flex gap-8 justify-between flex-wrap p-8 shadow-[0px_-1px_16px_#222222] w-full">
      
      <div>
        <h2 className="text-white text-xl font-bold mb-4">About</h2>
        <p className="text-sm leading-relaxed">
          Melodies is a website that has been created for over
          <span className="text-[#62d962] font-medium"> 5 year's </span>
          now and it is one of the most famous music player website’s in the
          world. In this website you can listen and download songs for free.
          Also if you want no limitation you can buy our
          <span className="text-[#62d962] font-medium"> premium pass’s.</span>
        </p>
      </div>

      {/* Melodies Links */}
      <div>
        <h2 className="text-white text-xl font-bold mb-4 border-b border-white w-fit">
          Melodies
        </h2>
        <ul className="flex flex-col gap-2 text-sm">
          <li>Songs</li>
          <li>Radio</li>
          <li>Podcast</li>
        </ul>
      </div>

      {/* Access Links */}
      <div>
        <h2 className="text-white text-xl font-bold mb-4 border-b border-white w-fit">
          Access
        </h2>
        <ul className="flex flex-col gap-2 text-sm">
          <li>Explor</li>
          <li>Artists</li>
          <li>Playlists</li>
          <li>Albums</li>
          <li>Trending</li>
        </ul>
      </div>

      {/* Contact Links */}
      <div>
        <h2 className="text-white text-xl font-bold mb-4 border-b border-white w-fit">
          Contact
        </h2>
        <ul className="flex flex-col gap-2 text-sm">
          <li>About</li>
          <li>Policy</li>
          <li>Social Media</li>
          <li>Soppurt</li>
        </ul>
      </div>

      {/* Logo + Social Icons */}
      {/* <div className="col-span-full flex justify-between items-center mt-10 md:mt-0"> */}
      <div className="flex flex-col justify-between mt-10 md:mt-0 col-span-full lg:col-span-0">
        <h2 className="text-3xl font-bold text-[#62d962]">
          Melodies
        </h2>
        <div className="flex pt-4 gap-x-4">
          <i>
            <Instagram size={15} />
          </i>
          <i>
            <Facebook size={15} />
          </i>
          <i>
            <Twitter size={15} />
          </i>
          <i>
            <Phone size={15} />
          </i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
