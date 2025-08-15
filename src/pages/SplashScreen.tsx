import { Music, Headphones } from "lucide-react";
import { Loader } from "lucide-react";

const SplashScreen = () => {
  //
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#181818] transition-opacity duration-500">
      {/* Floating Music Notes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-0">
          <Music className="h-8 w-8 text-pink-500/40" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-300">
          <Headphones className="h-10 w-10 text-cyan-500/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-700">
          <Music className="h-6 w-6 text-purple-500/40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-6">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-[#62d962] flex items-center justify-center animate-pulse">
            <Music className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-[#62d962] bg-clip-text text-transparent">
            Melodies
          </h1>
        </div>

        {/* Loading Animation */}
        <div>
          <p className="text-gray-400 text-sm mt-2">
            Loading your music experience...
          </p>
          <span className="flex justify-center items-center pt-4">
            <Loader className="animate-spin w-8 h-8 text-[#62d962]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
